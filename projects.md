---
layout: page
title: Projects
permalink: projects/
grid_class: l-middle
jsarr:
  - js/project-expand.js
---

<p class="l-middle">Various personal, academic and professional projects.</p>

<div class="project-spacer-small"></div>

<div class="project-filter l-middle">
    <button class="project-filter__btn active" data-filter-all="true">All</button>

    <span class="project-filter__separator"></span>

    <button class="project-filter__btn" data-filter-tag="machine learning">Machine Learning</button>
    <button class="project-filter__btn" data-filter-tag="data engineering">Data Engineering</button>
    <button class="project-filter__btn" data-filter-tag="data visualization">Data Visualization</button>
    <button class="project-filter__btn" data-filter-tag="NLP">NLP</button>
    <button class="project-filter__btn" data-filter-tag="computer vision">Computer Vision</button>
    <button class="project-filter__btn" data-filter-tag="statistics">Statistics</button>
    <button class="project-filter__btn" data-filter-tag="causal inference">Causal Inference</button>

    <span class="project-filter__separator"></span>

    <button class="project-filter__btn" data-filter-starred="true"><i class="fas fa-star" style="color: #ffb700;"></i> Starred</button>

    <span class="project-filter__separator"></span>

    <button class="project-filter__btn" data-filter-type="personal"><i class="fas fa-user"></i> Personal</button>
    <button class="project-filter__btn" data-filter-type="academic"><i class="fas fa-graduation-cap"></i> Academic</button>
    <button class="project-filter__btn" data-filter-type="professional"><i class="fas fa-briefcase"></i> Professional</button>
</div>

<div class="project-spacer-small"></div>

<div class="project-grid l-middle">
    {% for article in site.data.articles %}
        {% include project-card.html article=article id=forloop.index %}
    {% endfor %}
</div>