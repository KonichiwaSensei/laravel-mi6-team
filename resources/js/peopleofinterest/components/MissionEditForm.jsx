import axios from "axios";
import { useEffect, useState } from "react";

export default function MissionEditForm({ missionId, setMissionId }) {

    const [mission, setMission] = useState('')

    const loadMission = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/missions/' + missionId)
            // console.log(response);
            setMission(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadMission()
    }, [missionId])



    return (
        <div className="missionedit_div">
            <h1 className="missionedit_title">Edit Form for: Mission {missionId}</h1>
            <div className="missionedit_inputdiv">
                <input className="missionedit_inputdiv_input" type="text" value={mission.name}/>
                <input className="missionedit_inputdiv_input" type="text" value={mission.year}/>
                <button className="missionedit_inputdiv_savebutton">Save</button>
                <br />
            </div>
            <br />
            <button className="missionedit_backbutton" onClick={() => setMissionId(null)}>Back</button>
        </div>
    )
}