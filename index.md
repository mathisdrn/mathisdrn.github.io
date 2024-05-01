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
		I design and develop interactive interfaces to help people <b>understand machine learning models</b> and data-driven systems. Besides building tools, I also create <b>data visualizations</b> and write interactive articles to simply communicate complex ideas.
	</div>
	<div style="height: 1rem"></div>
	<div>
		I received my PhD from Georgia Tech where I worked with <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a> and <a href="http://va.gatech.edu/endert/">Alex Endert</a>. My dissertation on <a href="/dissertation">interactive interfaces for interpretability</a> won the <i>ACM SIGCHI Outstanding Dissertation Award</i> and was supported by a <i>NASA Space Technology Research Fellowship</i>.
	</div>
	<div style="height: 1rem"></div>
	<div>
		I have collaborated with designers, developers, artists, and scientists while working at <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/apple.svg"> Apple, <img class="intro-logo" style="width: 18px; padding-bottom: 3px;" src="/images/microsoft.svg"> Microsoft Research, <img class="intro-logo" style="width: 24px" src="/images/nasa.svg"> NASA Jet Propulsion Lab, and <img class="intro-logo" style="width: 24px;" src="/images/pnnl.svg"> Pacific Northwest National Lab.
	</div>
</div>

<hr class="l-middle home-hr">

<h2 class="feature-title">Compétences</h2>

<p class="feature-text">
	Liste des compétences acquises au cours de mes années de licence et de projets personnels.
</p>

<div class="cover-wrapper cover-wrapper-3-col l-page">
	{% assign sortedArticles = site.data.articles | where: "featured", true %}
	{% assign ia = site.categories.papers | where:"permalink", "papers/interactive-articles" %}

	{% assign feature = sortedArticles[1] %}
	{% include feature.html feature=feature %}

	{% assign feature = sortedArticles[0] %}
	{% include feature.html feature=feature %}

	{% assign feature = ia[0] %}
	{% include feature.html feature=feature %}
</div>

<div class="cover-wrapper cover-wrapper-3-col l-page">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.dissertation == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<br>

<h2 class="feature-title">Projets personnel et académiques</h2>

<p class="feature-text">
	Liste des projets réalisés au cours de mes années de licence et de projets personnels.
</p>

<div class="cover-wrapper cover-wrapper-2-col l-middle">
	{% for feature in site.data.designs %}
		{% if feature.featured == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<div class="cover-wrapper cover-wrapper-1-col l-text"> 
	{% include dissertation/document.html details=false location=home %}
</div> 


[cv]: {{ site.url }}/cv