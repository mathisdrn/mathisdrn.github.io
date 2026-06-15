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
    <button class="project-filter__btn" data-filter-tag="web development">Web Development</button>

    <span class="project-filter__separator"></span>

    <button class="project-filter__btn" data-filter-type="personal"><i class="fas fa-user"></i>ㅤPersonal</button>
    <button class="project-filter__btn" data-filter-type="academic"><i class="fas fa-graduation-cap"></i>ㅤAcademic</button>
    <button class="project-filter__btn" data-filter-type="professional"><i class="fas fa-briefcase"></i>ㅤProfessional</button>
</div>

<div class="project-spacer-small"></div>

<div class="project-grid l-middle">
    {% assign sortedArticles = site.data.articles | sort: "index" %}
    {% for article in sortedArticles %}
        {% include project-card.html article=article %}
    {% endfor %}
</div>