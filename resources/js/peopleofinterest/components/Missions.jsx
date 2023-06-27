import axios from "axios";
import { useEffect, useState } from "react";
import MissionEditForm from "./MissionEditForm";



export default function Missions(){


    const [missions, setMissions] = useState([]);
    const [missionId,setMissionId] = useState(null);

    const loadMissions = async () => {
        //request with axios
       try{
        const response = await axios.get('/api/missions')
        console.log(response)
        setMissions(response.data)
        
       }
       catch(err){
        console.log(err)
        
    // return <h1>GOOD MORNING</h1>
       }
}

useEffect(() => {
    loadMissions();
},[])

    return(
        <>{
            missionId?
            <MissionEditForm missionId={ missionId } setMissionId={ setMissionId } /> 
            :
        missions.map(mission => {
            return(
            <div key={mission.id} onClick={()=>setMissionId(mission.id)}>
                Mission Name:{mission.name}<br/>
                Mission ID:{mission.id}<br/>
                Mission Year:{mission.year}<br/>
                Mission Outcome:{mission.outcome}<br/>
                <hr />
             
            </div>
            )
            
        })}
       
        </>
    )


}