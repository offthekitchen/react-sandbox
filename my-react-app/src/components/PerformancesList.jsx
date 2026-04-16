import jsonBreweries from "/src/data/BREWERIES.json";
import ColoradoFlag from "/src/assets/coFlag.png";

function PerformanceList(props) {
  const filteredBreweries = jsonBreweries.breweries.filter(brewery => (brewery.stateCode == "CO" && props.type=="colorado") || (brewery.stateCode != "CO" && props.type=="other"))
  return (
    <div className="performanceList my-10">
      {props.type == "colorado" && (
        <div className="flex justify-center">
          <img src={ColoradoFlag} alt="Colorado Flag" className="h-8 w-auto" />
        </div>
      )}
      <h2> {props.type} </h2>
      <ul>
        {filteredBreweries.map((brewery) => (
          <li key={brewery.id}>
            {brewery.brewery} - {brewery.cityName}, {brewery.stateCode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PerformanceList;
