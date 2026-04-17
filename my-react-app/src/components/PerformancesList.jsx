import ColoradoFlag from "/src/assets/coFlag.png"
import React, { useEffect, useState } from "react"
import { fetchPerformances } from "/src/performances.js"

function PerformanceList(props) {
  const [performances, setPerformances] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPerformances(false)

        setPerformances(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false) // Stop loading indicator
      }
    }
    getData()
  }, [])

  if (loading) return <p>Loading...</p>

  var breweries = []

  //Filter Breweries
  let id = 1
  for (const performance of performances) {
    if (
      (performance.venue.includes("Brew") ||
        performance.venue.includes("Ale") ||
        performance.venue.includes("Beer")) &&
      !(
        breweries.some((perf) => perf.brewery === performance.venue) &&
        breweries.some((perf) => perf.cityName === performance.cityName)
      )
    ) {
      breweries.push({
        id: id++,
        brewery: performance.venue,
        cityName: performance.cityName,
        stateCode: performance.stateCode,
      })
    }
  }

  //Filter by type
  const filteredBreweries = breweries.filter(
    (brewery) =>
      (brewery.stateCode == "CO" && props.type == "colorado") ||
      (brewery.stateCode != "CO" && props.type == "other"),
  )

  return (
    <div>
      <div className="performanceList my-10">
        {props.type == "colorado" && (
          <div className="flex justify-center">
            <img
              src={ColoradoFlag}
              alt="Colorado Flag"
              className="h-8 w-auto"
            />
          </div>
        )}
        <h3 className="text-white"> {props.type} </h3>
        <ul>
          {filteredBreweries.map((brewery) => (
            <li key={brewery.id}>
              {brewery.brewery} - {brewery.cityName}, {brewery.stateCode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PerformanceList
