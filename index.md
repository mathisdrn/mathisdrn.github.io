---
layout: home
title: Home
---

<div id="intro-wrapper" class="l-text">
	<div id="intro-title-wrapper">
		<div id="intro-image-wrapper">
			<img id="intro-image" src="/images/portrait.png"></div>
		<div id="intro-title-text-wrapper">
			<h1 id="intro-title">Hi, I'm Mathis Derenne</h1>
			<div id="intro-subtitle">I'm a Data Science Student</div>
			<div id="intro-title-socials">
				{% for link in site.data.social-links %}
					{% if link.on-homepage == true %}
						{% include social-link.html link=link %}
					{% endif %}
				{% endfor %}
			</div>
		</div>
	</div>
	<!-- <hr class="l-middle home-hr"> -->
	<div id="everything-else" class="l-middle">
		<a href="{{ site.url }}/cv"><div><i class="fa fa-portrait icon icon-right-space"></i>CV</div></a>
		<a href="{{ site.url }}/projects"><div><i class="fa fa-shapes icon icon-right-space"></i>Projets</div></a>
		<a href="{{ site.url }}/about-me"><div><i class="fa fa-user icon icon-right-space"></i>About me</div></a>
	</div>

	<div>
	Passionné par l'informatique depuis tout jeune, je m'intéresse désormais à la Data Science. Je suis à la recherche d’une alternance afin d’intégrer le <a class = "cv-blue-link" href="https://www.univ-lyon2.fr/master-1-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs#presentation"> Master MIASHS</a> de l’Université de Lyon. </div>
	
	<div style="height: 1rem"></div>
	
	<div>
		Je suis diplômé d'une Licence de mathématiques et informatique appliqués de l'Université de Rennes. J'ai eu l'opportunité d'effectuer un stage au sein de <img class="intro-logo" src="{{ site.baseurl }}/images/auto1.svg"> en tant que Data Analyst et au sein de <img class="intro-logo" src="{{ site.baseurl }}/images/cgi.svg"> en tant qu'Ingénieur Logiciel.
	</div>
</div>

<hr class="l-middle home-hr">

<h2 class="feature-title">Compétences</h2>

<p class="feature-text">
	Liste des compétences acquises au cours de mes années de licence et de projets personnels.
</p>

<div class="cover-wrapper cover-wrapper-3-col l-page">
	{% for skill in site.data.skills %}
		{% include skill.html skill=skill %}
	{% endfor %}
</div>

<br>

<h2 class="feature-title"><a href="/projects">Projets</a> personnels et académiques</h2>

<p class="feature-text">
	Principaux projets réalisés au cours de mes années de licence.
</p>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
    {% assign sortedArticles = site.data.articles | where: "featured", true %}
    {% for feature in sortedArticles limit:2 %}
        {% include feature.html feature=feature %}
    {% endfor %}
</div>

[cv]: {{ site.url }}/cv