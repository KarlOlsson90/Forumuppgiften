import React from 'react'

export default function DisplayCategory(props) {
    return (
        <div>
            <p>{props.categoryObj.title}</p>
            <button onClick={() => props.handleOnClick(props.categoryObj.id)}>Välj cat</button>
        </div>
    )
}
