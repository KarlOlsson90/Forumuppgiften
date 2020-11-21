import React, {useState} from 'react'
import FormPostComponent from '../../components/posts/FormPostComponent'

export default function PostCreationPage() {

    const [data, setData] = useState(null)

    function handleSubmit(input) {

        const url = "/api/v1/forum/posts/.json"

        fetch(url, {
            "Content-Type": "application/json"
        }).then(data => {
            setData(data)
        })

    }

    return (
        <div>
            <FormPostComponent handleSubmit={handleSubmit}></FormPostComponent>

            
        </div>
    )
}
