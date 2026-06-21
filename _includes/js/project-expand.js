document.addEventListener('DOMContentLoaded', function () {
  // ============================
  // More toggle
  // ============================

  document.querySelectorAll('.project-card__description').forEach(function (desc) {
    if (!desc.getAttribute('data-full-html')) {
      desc.setAttribute('data-full-html', desc.innerHTML);
    }
  });

  function getTextNodes(node) {
    const textNodes = [];
    function traverse(n) {
      if (n.nodeType === Node.TEXT_NODE) {
        if (n.textContent.trim().length > 0) {
          textNodes.push(n);
        }
      } else {
        for (let i = 0; i < n.childNodes.length; i++) {
          traverse(n.childNodes[i]);
        }
      }
    }
    traverse(node);
    return textNodes;
  }

  function pruneEmptyElements(node) {
    for (let i = node.childNodes.length - 1; i >= 0; i--) {
      const child = node.childNodes[i];
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
    const textNodes = getTextNodes(container);

    let wordCounter = 0;
    let truncated = false;
    let lastActiveNode = null;

    for (let i = 0; i < textNodes.length; i++) {
      const node = textNodes[i];
      if (truncated) {
        node.textContent = '';
        continue;
      }

      const words = node.textContent.split(/\s+/).filter(Boolean);
      if (wordCounter + words.length >= w) {
        const keepCount = w - wordCounter;
        const keptWords = words.slice(0, keepCount);
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
      const btn = document.createElement('button');
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

      const card = desc.closest('.project-card');
      if (card && card.classList.contains('hidden')) return;

      const fullHtml = desc.getAttribute('data-full-html');
      if (!fullHtml) return;

      const style = window.getComputedStyle(desc);
      let lineHeight = parseFloat(style.lineHeight);
      if (isNaN(lineHeight)) {
        const fontSize = parseFloat(style.fontSize);
        lineHeight = fontSize * 1.45;
      }
      const maxHeight = Math.ceil(lineHeight * 3) + 2;

      desc.innerHTML = fullHtml;

      if (desc.scrollHeight > maxHeight) {
        const textContent = desc.textContent || '';
        const totalWords = textContent.split(/\s+/).filter(Boolean).length;

        let low = 0;
        let high = totalWords;
        let bestW = totalWords;

        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          truncateToWordCount(desc, fullHtml, mid);

          if (desc.scrollHeight <= maxHeight) {
            bestW = mid;
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }

        truncateToWordCount(desc, fullHtml, bestW);
      }
    });
  }

  truncateDescriptions();

  window.addEventListener('resize', truncateDescriptions);

  document.body.addEventListener('click', function (e) {
    const btn = e.target.closest('.project-card__more-btn');
    if (!btn) return;

    const targetId = btn.getAttribute('data-target');
    const desc = document.getElementById(targetId);
    if (!desc) return;

    const fullHtml = desc.getAttribute('data-full-html');
    if (fullHtml) {
      desc.classList.add('expanded');
      desc.innerHTML = fullHtml;
    }
  });

  // ============================
  // Filter logic
  // ============================
  let activeTagFilter = null;
  let activeTypeFilter = null;
  let activeStarredFilter = false;
  const cards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.project-filter__btn');

  function applyFilters() {
    cards.forEach(function (card) {
      const cardTags = (card.getAttribute('data-tags') || '').split(',').filter(Boolean);
      const cardType = card.getAttribute('data-type') || '';
      const cardStarred = card.getAttribute('data-starred') === 'true';

      const tagMatch = !activeTagFilter || cardTags.indexOf(activeTagFilter) !== -1;
      const typeMatch = !activeTypeFilter || cardType === activeTypeFilter;
      const starredMatch = !activeStarredFilter || cardStarred;

      if (tagMatch && typeMatch && starredMatch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    truncateDescriptions();
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filterTag = btn.getAttribute('data-filter-tag');
      const filterType = btn.getAttribute('data-filter-type');
      const filterStarred = btn.getAttribute('data-filter-starred');
      const isAll = btn.getAttribute('data-filter-all');
      const allBtn = document.querySelector('[data-filter-all]');

      if (isAll) {
        activeTagFilter = null;
        activeTypeFilter = null;
        activeStarredFilter = false;
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      } else if (filterTag) {
        if (allBtn) allBtn.classList.remove('active');

        document.querySelectorAll('[data-filter-tag]').forEach(function (b) {
          if (b !== btn) b.classList.remove('active');
        });

        if (activeTagFilter === filterTag) {
          activeTagFilter = null;
          btn.classList.remove('active');
          if (!activeTypeFilter && !activeStarredFilter && allBtn) allBtn.classList.add('active');
        } else {
          activeTagFilter = filterTag;
          btn.classList.add('active');
        }
      } else if (filterType) {
        if (allBtn) allBtn.classList.remove('active');

        document.querySelectorAll('[data-filter-type]').forEach(function (b) {
          if (b !== btn) b.classList.remove('active');
        });

        if (activeTypeFilter === filterType) {
          activeTypeFilter = null;
          btn.classList.remove('active');
          if (!activeTagFilter && !activeStarredFilter && allBtn) allBtn.classList.add('active');
        } else {
          activeTypeFilter = filterType;
          btn.classList.add('active');
        }
      } else if (filterStarred) {
        if (allBtn) allBtn.classList.remove('active');

        if (activeStarredFilter) {
          activeStarredFilter = false;
          btn.classList.remove('active');
          if (!activeTagFilter && !activeTypeFilter && allBtn) allBtn.classList.add('active');
        } else {
          activeStarredFilter = true;
          btn.classList.add('active');
        }
      }

      applyFilters();
    });
  });
});
