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
    }, [])

    const handleInputChange = (event) => {
        setMission(previous_mission_values => {
            return ({
                ...previous_mission_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const submitMissionEdit = async (e) => {
        e.preventDefault()

        const response = await axios.post('/api/missions/store', mission)

        console.log(response.data);
    }

    return (
        <div className="missionedit_div">
            <h1 className="missionedit_title">Edit Form for: Mission {missionId}</h1>
            <div className="missionedit_inputdiv">
                {mission ?
                    <form className="missionedit_inputdiv_form" onSubmit={(e) => { submitMissionEdit(e) }}>
                        <input className="missionedit_form_input" type="text" name="name" value={mission.name} onChange={handleInputChange} />
                        <input className="missionedit_form_input" type="text" name="year" value={mission.year} onChange={handleInputChange} />
                        <button className="missionedit_form_savebutton">Save</button>
                    </form>
                    :
                    <div className="missionedit_loading">Loading...</div>
                }
                <br />
            </div>
            <br />
            <button className="missionedit_backbutton" onClick={() => setMissionId(null)}>Back</button>
        </div>
    )
}