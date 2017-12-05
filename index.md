---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
js: main_lib.html
css: main_css.html
---

# Christmas Tree Heat Release Rate (HRR)

Each year since 2014, the Department of Fire Protection Engineering at the
University of Maryland has hosted an annual competition to predict the burning
behavior (heat release rate, HRR) of a Fraser Fir Christmas tree from ignition
to final burnout. More information about this competition can be found at:
<http://fpe.umd.edu/christmastreeHRRcompetition>.

On this page, you can ‘build’ (and submit) your own Christmas tree fire HRR
prediction for this year’s competition by adjusting four parameters that
define: fire growth rate, peak heat release, the duration of steady burning,
and fire decay.

{% include hrr_plot.html %}

You can compare HRR data in the app to previous 
[experimental measurements](http://fire.nist.gov/bfrlpubs/fire00/PDF/f00147.pdf)[^1] 
and [detailed simulations](https://www.firescience.gov/projects/07-1-5-08/project/07-1-5-08_Mell_exp_sim_doug_fir_cf09.pdf)[^2]
of Christmas tree burning behavior conducted at NIST. Detailed descriptions of
several key terms – e.g. heat release rate (HRR) – presented on this page are
also available at the [NIST Fire Dynamics page](https://www.nist.gov/fire-dynamics).

In 2017, the Fire Research Division at NIST supported Christmas tree fire
safety efforts by conducting a series of fire experiments to demonstrate how a
frequently watered Christmas tree may be less of a fire hazard than a dry one.
In these experiments, NIST provided the measurement science necessary to
quantify fire size (i.e. Heat Release Rate, HRR). Results of these experiments
can be viewed 
[*here*](https://www.nist.gov/topics/forensic-science/organization-scientific-area-committees-osac/holiday-fire-safety/what-does).

These experiments are part of a greater project that shares a vital fire safety
message during the holiday season and highlights relevant research projects and
tools – both experimental and modeling – that are developed to quantify the
behavior of fire and to reduce the impact of fire on people, property, and the
environment.

This competition is also supported each year to provide a platform for open
communication between members of the fire safety science community. Much like
the ‘Operation Tomodachi – Fire Research’ workshop hosted by NIST in 2015, it
is desired that this competition will encourage and motivate current
researchers and the next generation of scientists and engineers to explore and
develop collaborations related to emerging areas of fire safety science.

{% include ls_fire_research.html %}

[^1]: Stroup, D.W., DeLauter, J.L., Roadarmel, G., “Scotch Pine Christmas Tree Fire Tests,” NIST Report of Test FR 4010, National Institute of Standards and Technology. December 1, 1999.  <http://fire.nist.gov/bfrlpubs/fire00/PDF/f00147.pdf>. Downloaded November 1, 2017.

[^2]: Mell, W., Maranghides, A., McDermott, R., Manzello, S.L., “Numerical Simulation and Experiments of Burning Douglas Fir Trees,” Combustion and Flame 156: 2023-2041. 2009.  <https://www.firescience.gov/projects/07-1-5-08/project/07-1-5-08_Mell_exp_sim_doug_fir_cf09.pdf> Downloaded November 1, 2017.

