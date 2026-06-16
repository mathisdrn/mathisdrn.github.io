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
		<a href="{{ site.baseurl }}/CV%20-%20Mathis%20Derenne.pdf"><div><i class="fa fa-portrait icon icon-right-space"></i>CV</div></a>
		<a href="{{ site.baseurl }}/projects"><div><i class="fa fa-shapes icon icon-right-space"></i>Projects</div></a>
		<a href="{{ site.baseurl }}/about-me"><div><i class="fa fa-user icon icon-right-space"></i>About me</div></a>
	</div>

	<div>
		I build data pipelines, create data visualizations, and train machine learning models to <b>transform data</b> into <b>actionable business value</b>.
	</div>
	<div style="height: 1.5rem"></div>
	<div>
		I am currently completing an MSc in Machine Learning at the University of Lyon alongside an apprenticeship at CoSpirit with diverse responsabilities in Data Science.
	</div>	
	<div style="height: 1rem"></div>
	<div>
		Relocating to Berlin from late September 2026. I am seeking English-speaking roles in Data Analytics, Engineering, or Data Science.
	</div>

</div>
