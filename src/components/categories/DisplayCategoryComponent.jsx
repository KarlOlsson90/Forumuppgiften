import React from 'react'

export default function DisplayCategory(props) {
    return (
        <div className="container d-inline">
            <button className="btn btn-secondary" onClick={() => props.handleOnClick(props.categoryObj.id)}>{props.categoryObj.title}</button>
        </div>
    )
}
