import React, {useState} from 'react'

export default function FormPostComponent(props) {
    
    const fields = ["title", "content", "category"]

    const [form, setForm] = useState(fields)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    return (

        <form>
            
            {fields.map((field, index) =>{
                return(
                    <div key={index}>
                        <label>{field}</label>
                        <input name={field} onChange={handleInputChange}></input>
                    </div>
                )

            })}
            <button onClick={() => props.handleSubmit(form)}>Spara</button>
            
        </form>
    )
}
