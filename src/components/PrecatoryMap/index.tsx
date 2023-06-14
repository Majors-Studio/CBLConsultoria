import React, { useEffect } from "react"
import { Chart } from "chart.js"
import * as ChartGeo from "chartjs-chart-geo"
// import classes from './styles.css';

const MapChart = () => {
  useEffect(() => {
    fetch("https://unpkg.com/world-atlas/countries-50m.json")
      .then((r) => r.json())
      .then((data) => {
        const countries = ChartGeo.topojson.feature(
          data,
          data.objects.countries
        ).features

        const labels = countries.map((d) => d.properties.name)
        const paises = ["076"]
        const values = countries.map((d) => {
          if (paises.includes(d.id)) {
            console.log(d)
            return {
              feature: d,
              value: 1, // Math.random()
            }
          } else {
            return {
              feature: d,
              value: 0,
            } 
          }
        })
        console.log(values)

        new Chart(
          document.getElementById("canvas2").getContext("2d"),
          {
            type: "choropleth",
            data: {
              labels: labels,

              datasets: [
                {
                  label: "Countries",
                  data: values,
                },
              ],
            },

            options: {
              showOutline: true,
              showGraticule: true,
              plugins: {
                legend: {
                  display: false,
                },
              },

              scales: {
                xy: {
                  projection: "equalEarth",
                },
              },
            },
          }
        )
      })
  }, [])

  return <canvas id="canvas2"></canvas>
}

export default MapChart
