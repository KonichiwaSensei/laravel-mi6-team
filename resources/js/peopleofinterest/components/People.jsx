import { useEffect, useState } from 'react';
import { PersonDetail } from './PersonDetail';
import StatusFilter from './StatusFilter';

export default function People() {
    const [people, setPeople] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [SelectedStatus,setSelectedStatus] = useState('')

    const getData = async () => {
        const response = await fetch('/api/people' + '?status=' + encodeURIComponent(selectedStatus))
        const data = await response.json()
        // console.log(response);
        setPeople(data)
    }

    useEffect(() => {
        getData()
    },[selectedStatus])

    return (
        <div>
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            {personId
            ?
            <PersonDetail personId={personId} setPersonId={setPersonId} />
            :
            people && people.map((person) => {
                return (
                    <p key={person.id}>
                        Name: {person.name} <button onClick={() => {setPersonId(person.id)}}>Details</button><br/>
                        Nationality: {person.nationality}<br/>
                        Occupation: {person.occupation}<br/>
                        Status: {person.status_text}
                    </p>
                )
            })}
            
        </div>
    )

}