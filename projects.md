---
layout: page
title: Projets
permalink: projects/
---

Réalisations diverses aussi bien académiques que personnelles.

<div class="project-spacer-small"></div>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
    {% assign sortedArticles = site.data.articles | where: "featured", true %}
    {% for feature in sortedArticles limit:4 %}
        {% include feature.html feature=feature %}
    {% endfor %}
</div>

<div class="project-spacer-small"></div>

<ul>
    {% for article in site.data.articles %}
        {% unless article.featured %}
            <li><a href="{{ article.url }}" style="text-transform: capitalize">{{ article.title }}</a> <small style="color: #c0c0c0">{{ article.year }}</small></li>
        {% endunless %}
    {% endfor %}
</ul>