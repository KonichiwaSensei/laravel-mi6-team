

export default function MissionEditForm({ missionId ,setMissionId}){


    
    return(
        <>
        <h1>MissionEditForm {missionId}</h1>
        
        <form submit={(e)=> {submitMissionEdit(e)}}>
            <label>
                Name:
                <input type="text" name=" name" value={mission.year} onChange={handelInputChange} />
            </label>

            <label>
                Year:
                <input type="number" name="year" value={mission.year} onChange={handelInputChange} />
            </label>
            <button type="submit">Save</button>
        </form>
        : 'Loading'

    
        <button onClick={ () => setMissionId(null) }>&times;</button>
        </>
    )
}