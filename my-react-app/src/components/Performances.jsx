import PerformancesList from "/src/components/PerformancesList"

function Performances() {

  return (
    <div className="performances">
      <h2>Performances</h2>
      <PerformancesList type="colorado"/>
      <PerformancesList type="other" />
    </div>
  )
}

export default Performances
