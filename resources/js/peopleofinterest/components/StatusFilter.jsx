import axios from "axios";
import { useEffect, useState } from "react"


export default function StatusFilter({SelectedStatus,setSelectedStatus}){
    const [statuses, setstatuses] = useState([]);

    const loadStatuses = async () => {
        //request with axios
       try{
        const response = await axios.get('/api/statuses')
        console.log(response)
        setstatuses(response.data)
       }
       catch(err){
        console.log(err)
       }

        //request with fetch
        // const response = await fetch('/api/statuses')
        // const data = await response.json()
        // loadStatuses(data);


    }

    useEffect(() => {
        loadStatuses();
    },[])
    return(
        <>
        {
            statuses.map((status) => {
            return  <button key={status.id} className={`status-filter__status` + (status.id === SelectedStatus ? '_selected' : '')} onClick={ () => setSelectedStatus(status.id) }>
                    {status.name}
                </button>
            })
        }
    </>
    )
    
}
