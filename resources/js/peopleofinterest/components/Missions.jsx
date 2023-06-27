import axios from "axios";
import { useEffect, useState } from "react";
import MissionEditForm from "./MissionEditForm";

export default function Missions() {

    const [missions, setMissions] = useState('');

    const [missionId, setMissionId] = useState(null)

    const loadMissions = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/missions')
            // console.log(response);
            setMissions(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadMissions()

    }, [])

    // console.log(missions);

    return (
        <>
            {missionId === null
                ?
                <div className="missions_div">
                    <h1 className="missions_title">Missions:</h1>
                    <ul className="missions_list">
                        {
                            !missions
                                ? <div className="missions_list_loading">Loading...</div>
                                :
                                missions.map((mission) => {
                                    return <div key={mission.id} className="mission_list_divwrap">
                                        <li key={mission.id} className="mission_list_item" onClick={() => setMissionId(mission.id)}>
                                            Mission Name = <strong className="mission_list_item_result">{mission.name}</strong>
                                            <br />
                                            Missionn Year = <strong className="mission_list_item_result">{mission.year}</strong>
                                        </li>
                                        <hr className="mission_list_divider" />
                                    </div>
                                })
                        }
                    </ul>
                </div>
                :
                <MissionEditForm missionId={missionId} setMissionId={setMissionId} />
            }
        </>
    )
}