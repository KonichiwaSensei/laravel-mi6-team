import { useEffect, useState } from "react"
import axios from "axios"

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/statuses')
            // console.log(response);
            setStatuses(response.data)
        } catch (error) {
            console.log(error);
        }


        // const response = await fetch('/api/statuses')
        // const data = await response.json()
        // setStatuses(data)
    }

    useEffect(() => {
        loadStatuses()
    }, [])

    // console.log(selectedStatus);
    return (
        <>
            {
                statuses.map((status) => {
                    return <button key={status.id} className={`status-filter__status` + (status.id === selectedStatus ? '_selected' : '')} onClick={() => setSelectedStatus(status.id)}>
                        {status.name}
                    </button>
                })
            }
        </>
    )
}