---
toc: false
title: SportsViz homepage
---

<div class="hero"
    style="
      background-image: url(./img/sports-situated-examples.png);
      height: 140px;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
    " >
<h1 style="width: 100%; text-align: center; color: lightgray; /* Filling color */
    -webkit-text-stroke: 1px white;">
  <span style="background-color: rgba(255, 255, 255, .2); color: black; display: inline-block; width: 100%;">SportsViz</span>
</h1>
</div>

<div>
  SportsViz is an <a href="https://anr.fr/fr/detail/call/aapg-appel-a-projets-generique-2024/">ANR-funded</a> (2025-2029) research project dedicated <b>to improve athletes performance and audience engagement</b> through advanced situated visualizations in sports videos. 
</div>

<div class="grid grid-cols-2">
  <div class="">
    <h2>News</h2>

  - **10/09/24** - Internship positions are available
  - **12/08/24** - Website is online
  - **01/07/24** - The project got accepted by French <a href="https://anr.fr/fr/detail/call/aapg-appel-a-projets-generique-2024/">ANR</a>

  </div>

  <div class="">
    <h2>Openings</h2>

  - 2 PhD programs
  - 1 Engineering position
  - Master internships
 
  </div>
</div>

```js
const events = FileAttachment("./data/events.json").json();
```

```js
import {timeline} from "./components/timeline.js";
```

```js
const parser_months = d3.timeParse("%Y-%m")
```

```js
const events_parsed = events.map(d => {
  d.start = parser_months(d.start)
  d.end = parser_months(d.end)  
  return d
})
```

```js
const pdfURL = await FileAttachment("./pdf/sportsviz-ui-internship.pdf").href;
```

## Context and goals

<br>

<div>
While data as visualization have a strong narrative and analytical power for sports analysis <a href="#[PVS+18]">[PVS+18]</a>, they currently are not integrated where and when they are relevant in videos. The standard way scientists or broadcasters display data is using visualizations inserts superimposed on the video rather than situated into the sports 3D scene e. g. on the wall, leveraging the physical context to show the progress, emphasize key performance factors (e. g. forces, speed) and put them in perspective with competitors. The resulting situated visualization would enable an informed decision-making process to make strategic choices, but also would engage a broader audience such as sports fans <a href="#[LCY+23]">[LCY+23]</a> while preserving and enhancing the viewing experience. The project dedicated to improve athletes performance and audience engagement through advanced situated visualizations <a href="[BKT+22]">[BKT+22]</a> in sports videos.</div>

<br>

The project is organize in 3 work-packages (WPs):

<ul>
  <li>WP1</li>
  <li>WP2</li>
  <li>WP3</li>
</ul>

<br>

<div>
Below is the expected timeline of the 4-year project. The project kicks-off in 2025 and will end by 2028.
</div>

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => timeline(events_parsed, width))}
  </div>
</div>

<br>

<h2 name="masters">Openings</h2>

<div class="grid grid-cols-2">

  <div class="tip" label="How to inquire about positions?">To inquire about positions, please email the contact directly with your resume and a short description of your research interests and motivation for joining the project. We'll get back to you shortly.</div>

  <div class="warning" label="Keep in mind">Please note that the exact position descriptions and formal application process will be released in early 2025. Also, please note that for each position, you must apply at least three months before the start date to allow time for all the administrative paperwork to be completed.</div>

  </div>

<h3 name="masters">Master internships</h3>

*We expect serveral intern positions to be available during 4 yearly batches of hiring as seen on the project timeline above. We expect the first batch to continue to the PhD positions.*

-  <a href="./_file/pdf/sportsviz-ui-internship.pdf">Situated Data Visualizations for Sports Videos</a>

<h3 name="masters">PhD Programs</h3>

- **PhD 1 (empirical studies)**: the focus of this PhD is to construct a design space and dedicated empirical studies to guide the use of visualizations to be embedded in sports videos. Contact: Petra Isenberg.
  
- **PhD 2 (authoring tools)**: the focus is to build authoring tools to support 3D embeded visualization in sports videos. Contact: Romain Vuillemot.

<h3 name="masters">Engineer</h3>

- **Engineer 1 (infrastructure)**: the focus is to setup a data and a 3D dynamic sports structure synchronized to a video sharing and streaming system. Contact: Lionel Reveret.

---

## Publications

<br>

*Coming soon*

---

## Partners

<div class="grid grid-cols-3">
  <div class="hero">
    <div><a href="https://romain.vuillemot.net/"><img src="img/romain-vuillemot.png" style="height:200px"></a></div>
    <div> <b>Romain Vuillemot (PI)</b> is an assistant professor (Maître de Conférence) at École Centrale de Lyon and LIRIS Lab (UMR 5205) in the SICAL team. His expertise is in Information Visualization and Visual Analytics, with a particular focus on sports analytics.</div>


  </div>
  <div class="hero">
    <div><a href="https://petra.isenberg.cc/"><img src="img/PetraIsenberg.jpg" style="height:200px"></a></div>
    <div><b>Petra Isenberg</b> is a research director (Directrice de Recherche, DR2,
HDR) at the Inria Saclay Centre at U. Paris-Saclay in the Aviz team. Her research expertise is
situated and embedded visualization, mobile visualization, visualization in motion, and the evaluation
of visualizations.</div>
  </div>
  <div class="hero">
    <div><a href="https://morpheo.inrialpes.fr/people/reveret/"><img src="img/lionel-reveret.jpg" style="height:200px"></a></div>
    <div><b>Lionel Reveret</b> is a research scientist (Chargé de Recherche) at the Inria Grenoble Center at U. Grenoble Alpes in the LJK laboratory (UMR 5224). His research expertise is motion analysis, especially from video and applied biomechanics in sports.</div>
  </div>
</div>


<div class="grid grid-cols-3">

  <div><<a href="https://www.ec-lyon.fr/"><img src="img/logo-ecl.png" style="width:300px"></a></div>
  <div><a href="https://inria.fr/"><img src="img/logo-inria.png" style="width:200px"></a></div>
  <div><a href="https://anr.fr/"><img src="img/logo-anr.png" style="width:200px"></a></div>

</div>

## References

<div class="grid grid-cols-2 references">

  <div class="col-md-6">

<a name="[PVS+18]" style="font-weight: bold">[PVS+18]</a> C. Perin, R. Vuillemot, C. D. Stolper, J. T. Stasko, J. Wood, and S. Carpendale. [State of the Art of Sports Data Visualization](https://hal.science/hal-01806107v1/document). Computer Graphics Forum, 2018.

<a name="[LCY+23]" style="font-weight: bold">[LCY+23]</a> T. Lin, Z. Chen, Y. Yang, D. Chiappalupi, J. Beyer, and H. Pfister. [The Quest for Omnioculars : Embedded Visualization for Augmenting Basketball Game Viewing Experiences.](https://vcg.seas.harvard.edu/publications/the-quest-for-omnioculars-embedded-visualization-for-augmenting-basketball-game-viewing-experiences) IEEE Transactions on Visualization and Computer Graphics, 2022.

</div>
  <div class="col-md-6">

<a name="[YVBI24]" style="font-weight: bold">[YVBI24]</a> Lijie Yao, Romain Vuillemot, Anastasia Bezerianos, and Petra Isenberg. [Designing for Visualization in Motion: Embedding Visualizations in Swimming Videos.](https://hal.science/hal-04364838/file/Lijie_2023_TVCG___Swimming.pdf) IEEE Transactions on Visualization and Computer Graphics, 2023.

<a name="[BKT+22]" style="font-weight: bold">[BKT+22]</a> Nathalie Bressa, Henrik Korsgaard, Aurélien Tabard, Steven Houben, and Jo Vermeulen. [What's the Situation with Situated Visualization? A Survey and Perspectives on Situatedness.](https://stevenhouben.be/pubs/VIS21-Situated_Visualization_Survey.pdf) IEEE Transactions on Visualization and Computer Graphics, 2022.


</div>

</div>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 2rem 0 4rem;
  text-wrap: balance;
  text-align: center;
  font-size: 14px;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 54em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

  .references {
    font-size: 100%;
  }

</style>
