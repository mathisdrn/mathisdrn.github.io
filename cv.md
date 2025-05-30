---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}">Mathis Derenne</a></h1>

<p id="cv-subtitle"><i>Étudiant en Data Science</i></p>

<div class="cv-spacer"></div>

<div>
Étudiant en 1ère année de <a class="cv-blue-link" href="https://www.univ-lyon2.fr/master-1-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs#presentation">Master MIASHS</a> à l’Université de Lyon. Je réalise actuellement une alternance au sein de <a class="cv-blue-link" href="https://cospirit.com/">CoSpirit</a> avec des responsabilités variées en Data Science, principalement en Machine Learning et Data Engineering.
<br>
</div>

<div class="cv-spacer"></div>

<div class="cv-image-links-wrapper">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include cv-social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include cv-social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

***

## Formation

{::nomarkdown}
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

## Expérience Professionnelle

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Expérience Personnelle

{% for experience in site.data.experiences %}
{% if experience.type == 'personal' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Langues

<div>
Anglais : Courant <br>
Espagnol : Intermédiaire
</div>

[cv]: {{ site.url }}/cv.pdf "My CV."
