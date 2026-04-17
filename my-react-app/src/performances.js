import axios from "axios"

export async function fetchPerformances(upcoming) {

    var foundPerformances = []

    try {
      const parm = {"upcomingPerformances": upcoming}
      const performancesResponse = await axios.post("https://coloradosessions.com/api/getPerformances/", parm)
       if (performancesResponse.data.performances.length > 0) {
        foundPerformances = performancesResponse.data.performances
      } 
    }
    catch (error) {
      console.error(error)    
    }

    return foundPerformances
  }