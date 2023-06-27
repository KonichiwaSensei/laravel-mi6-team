import { useEffect, useState } from "react"

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {
        const response = await fetch('/api/statuses')
        const data = await response.json()
        setStatuses(data)
    }

    useEffect(() => {
        loadStatuses()
    }, [])

    console.log(selectedStatus);
    return (
        <>
            {
                statuses.map((status) => {
                return  <button key={status.id} className={`status-filter__status` + (status.id === selectedStatus ? '_selected' : '')} onClick={ () => setSelectedStatus(status.id) }>
                        {status.name}
                    </button>
                })
            }
        </>
    )
}