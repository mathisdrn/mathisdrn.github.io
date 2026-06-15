document.addEventListener('DOMContentLoaded', function () {
  // ============================
  // More toggle
  // ============================

  // Initialize data-full-html attribute for each description
  document.querySelectorAll('.project-card__description').forEach(function (desc) {
    if (!desc.getAttribute('data-full-html')) {
      desc.setAttribute('data-full-html', desc.innerHTML);
    }
  });

  function getTextNodes(node) {
    var textNodes = [];
    function traverse(n) {
      if (n.nodeType === Node.TEXT_NODE) {
        if (n.textContent.trim().length > 0) {
          textNodes.push(n);
        }
      } else {
        for (var i = 0; i < n.childNodes.length; i++) {
          traverse(n.childNodes[i]);
        }
      }
    }
    traverse(node);
    return textNodes;
  }

  function pruneEmptyElements(node) {
    for (var i = node.childNodes.length - 1; i >= 0; i--) {
      var child = node.childNodes[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        pruneEmptyElements(child);
        if (child.innerHTML.trim() === '' && !child.classList.contains('project-card__more-btn')) {
          child.remove();
        }
      }
    }
  }

  function truncateToWordCount(container, originalHtml, w) {
    container.innerHTML = originalHtml;
    var textNodes = getTextNodes(container);
    
    var wordCounter = 0;
    var truncated = false;
    var lastActiveNode = null;
    
    for (var i = 0; i < textNodes.length; i++) {
      var node = textNodes[i];
      if (truncated) {
        node.textContent = '';
        continue;
      }
      
      var words = node.textContent.split(/\s+/).filter(Boolean);
      if (wordCounter + words.length >= w) {
        var keepCount = w - wordCounter;
        var keptWords = words.slice(0, keepCount);
        node.textContent = keptWords.join(' ') + '...';
        truncated = true;
        lastActiveNode = node;
        wordCounter += keepCount;
      } else {
        wordCounter += words.length;
        lastActiveNode = node;
      }
    }
    
    if (truncated && lastActiveNode) {
      var btn = document.createElement('button');
      btn.className = 'project-card__more-btn';
      btn.textContent = 'more';
      btn.setAttribute('data-target', container.id);
      btn.setAttribute('aria-expanded', 'false');
      btn.style.display = 'inline';
      
      lastActiveNode.parentNode.insertBefore(btn, lastActiveNode.nextSibling);
      pruneEmptyElements(container);
    }
    
    return truncated;
  }

  function truncateDescriptions() {
    document.querySelectorAll('.project-card__description').forEach(function (desc) {
      if (desc.classList.contains('expanded')) return;

      // Skip cards that are hidden
      var card = desc.closest('.project-card');
      if (card && card.classList.contains('hidden')) return;

      var fullHtml = desc.getAttribute('data-full-html');
      if (!fullHtml) return;

      // Calculate max height for 3 lines
      var style = window.getComputedStyle(desc);
      var lineHeight = parseFloat(style.lineHeight);
      if (isNaN(lineHeight)) {
        var fontSize = parseFloat(style.fontSize);
        lineHeight = fontSize * 1.45; // default fallback matching line-height in css
      }
      var maxHeight = Math.ceil(lineHeight * 3) + 2; // small buffer for rounding/subpixels

      // Render full content first to measure height
      desc.innerHTML = fullHtml;

      if (desc.scrollHeight > maxHeight) {
        var textContent = desc.textContent || '';
        var totalWords = textContent.split(/\s+/).filter(Boolean).length;

        var low = 0;
        var high = totalWords;
        var mid;
        var bestW = totalWords;

        while (low <= high) {
          mid = Math.floor((low + high) / 2);
          truncateToWordCount(desc, fullHtml, mid);

          if (desc.scrollHeight <= maxHeight) {
            bestW = mid;
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }

        // Set the final best truncation
        truncateToWordCount(desc, fullHtml, bestW);
      }
    });
  }

  // Run initial truncation
  truncateDescriptions();

  // Run on resize
  window.addEventListener('resize', truncateDescriptions);

  // Click handler to expand description inline and hide the button
  document.body.addEventListener('click', function (e) {
    var btn = e.target.closest('.project-card__more-btn');
    if (!btn) return;

    var targetId = btn.getAttribute('data-target');
    var desc = document.getElementById(targetId);
    if (!desc) return;

    var fullHtml = desc.getAttribute('data-full-html');
    if (fullHtml) {
      desc.classList.add('expanded');
      desc.innerHTML = fullHtml;
    }
  });

  // ============================
  // Filter logic
  // ============================
  var activeTagFilter = null;
  var activeTypeFilter = null;
  var cards = document.querySelectorAll('.project-card');
  var filterBtns = document.querySelectorAll('.project-filter__btn');

  function applyFilters() {
    cards.forEach(function (card) {
      var cardTags = (card.getAttribute('data-tags') || '').split(',').filter(Boolean);
      var cardType = card.getAttribute('data-type') || '';

      var tagMatch = !activeTagFilter || cardTags.indexOf(activeTagFilter) !== -1;
      var typeMatch = !activeTypeFilter || cardType === activeTypeFilter;

      if (tagMatch && typeMatch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
    
    // Re-truncate newly visible cards
    truncateDescriptions();
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filterTag = btn.getAttribute('data-filter-tag');
      var filterType = btn.getAttribute('data-filter-type');
      var isAll = btn.getAttribute('data-filter-all');

      if (isAll) {
        // Reset all filters
        activeTagFilter = null;
        activeTypeFilter = null;
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      } else if (filterTag) {
        // Toggle tag filter (exclusive single select)
        var allBtn = document.querySelector('[data-filter-all]');
        if (allBtn) allBtn.classList.remove('active');

        // Deactivate other tag buttons
        document.querySelectorAll('[data-filter-tag]').forEach(function (b) {
          if (b !== btn) b.classList.remove('active');
        });

        if (activeTagFilter === filterTag) {
          activeTagFilter = null;
          btn.classList.remove('active');
          // If no filters active, re-activate "All"
          if (!activeTypeFilter) {
            if (allBtn) allBtn.classList.add('active');
          }
        } else {
          activeTagFilter = filterTag;
          btn.classList.add('active');
        }
      } else if (filterType) {
        // Toggle type filter (exclusive single select)
        var allBtn = document.querySelector('[data-filter-all]');
        if (allBtn) allBtn.classList.remove('active');

        // Deactivate other type buttons
        document.querySelectorAll('[data-filter-type]').forEach(function (b) {
          if (b !== btn) b.classList.remove('active');
        });

        if (activeTypeFilter === filterType) {
          activeTypeFilter = null;
          btn.classList.remove('active');
          // If no filters active, re-activate "All"
          if (!activeTagFilter) {
            if (allBtn) allBtn.classList.add('active');
          }
        } else {
          activeTypeFilter = filterType;
          btn.classList.add('active');
        }
      }

      applyFilters();
    });
  });
});
