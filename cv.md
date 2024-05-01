---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}">Mathis Derenne</a></h1>

<p id="cv-subtitle"><i>Data Science Student</i></p>

<div class="cv-spacer"></div>

<div>
I design and develop interactive interfaces to help people <b><span class="cv-ai">understand machine learning</span></b> models and data-driven systems. Besides building tools, I also create data visualizations and write interactive articles to simply communicate complex ideas.
</div>

<div class="cv-spacer"></div>

<div>
I have collaborated with researchers, designers, developers, and artists while working at Apple, Microsoft Research, NASA Jet Propulsion Lab, and Pacific Northwest National Lab.
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

## Education

{::nomarkdown}
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

## Work Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Personal Experience

{% for experience in site.data.experiences %}
{% if experience.type == 'personal' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## References

{% for reference in site.data.references %}
{% include cv/reference.html reference=reference %}
{% endfor %}


## Contact

Fred Hohman  
`fredhohman@gatech.edu`  
CODA Tech Square  
Georgia Tech  
756 W Peachtree St NW  
Atlanta, GA 30308


[cv]: {{ site.url }}/cv.pdf "My CV."

[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
[gt]: http://gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "GT Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "GT College of Computing"

[fred]: http://fredhohman.com "Fred Hohman"
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"
[alex]: http://va.gatech.edu/endert/ "Alex Endert"

[jpl]: https://www.jpl.nasa.gov/ "NASA Jet Propulsion Lab"
[hi]: https://www.hi.jpl.nasa.gov/ "Human Interfaces Group at NASA JPL"
[pnnl]: https://www.pnnl.gov/ "Pacific Northwest National Laboratory"
[dsa]: http://www.pnnl.gov/nationalsecurity/technical/capabilities/computing/data_sciences.stm "Data Sciences and Analytics Group at PNNL"
[msr]: https://www.microsoft.com/en-us/research/ "Microsoft Research"
[msr-hci]: https://www.microsoft.com/en-us/research/group/human-computer-interaction/ "HCI@MSR"

[twitter]: https:/www.twitter.com/fredhohman "@fredhohman"
[github]: https:/www.github.com/fredhohman "github.com/fredhohman"
[nstrf]: https://www.nasa.gov/strg/nstrf "NASA Space Technology Research Fellowship"
