import jsonBreweries from "/src/data/BREWERIES.json"

function Performances() {

  return (
    <div className="performanceList">
      <h2>Performances</h2>
      <ul>
        {jsonBreweries.breweries.map((brewery) => (
          <li key={brewery.id}>
            {brewery.brewery} - {brewery.cityName}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Performances
