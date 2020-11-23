import React, {useState} from 'react'

export default function FormReplyComponent(props) {
    
    const fields = ["title", "content"]

    const [form, setForm] = useState(fields)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    return (

        <form onSubmit={(e) => props.handleSubmit(e, form)}>
            
            {fields.map((field, index) =>{
                return(
                    <div key={index}>
                        <label>{field}</label>
                        <input name={field} onChange={handleInputChange}></input>
                    </div>
                )

            })}
            <button type="submit">Publicera kommentar</button>
            
        </form>
    )
}
