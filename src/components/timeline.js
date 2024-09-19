import * as Plot from "npm:@observablehq/plot";

export function timeline(intervals, width, options = { x_domain: [new Date("2024"), new Date("2030")], x_current: new Date("2024-09") }) {
  return Plot.plot({
    marginLeft: 50,
    width: width,
    fontSize: 10,
    color: {
      type: "categorical",
      domain: ["PhD Student", "Post-Docs", "Engineer", "Internships", "Grant"],
      range: ["#7fc97f", "#beaed4", "#9498a0", "#bcbd22", "#f0027f"],
      legend: false
    },
    x: {
      axis: "bottom",
      grid: true,
      domain: options.x_domain
    },
    marks: [
      Plot.axisY({
        fill: "white",
        stroke: "white",
        textStroke: "white",
        textStrokeWidth: 3,
        textStrokeOpacity: 0
      }),
      Plot.axisX({
        stroke: "black",
        fontSize: 10,
      }),
      Plot.barX(intervals, { x1: d => d.start, x2: d => d.end, fill: (d, i) => d.type, y: (d, i) => i }),
      Plot.text(intervals, { x: d => d.start, y: (d, i) => i, text: d => d.name ? d.name : "-", dy: 0, textAnchor: "start", dx: 0, fontSize: 10, textStroke: "white", textStrokeWidth: 3, textStrokeOpacity: 0.6 }),
      Plot.ruleX([options.x_current], { stroke: "red", strokeWidth: 2 })
    ]
  })
}