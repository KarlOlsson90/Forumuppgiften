import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments} from '@fortawesome/free-solid-svg-icons'

export default function DisplayPostComponent(props) {
    return (
        <div>
            
            <br />
            <div className="card">
                <div className="card-header">
                {props.postObj.title}
                <div className="float-right">
                    
                    <Link to={`/posts/${props.postObj.id}`}>{props.postObj.countResponses}&nbsp;
                    <FontAwesomeIcon icon={faComments}/></Link> 
                </div>
                </div>
                <div className="card-body">
                    <p>{props.postObj.content}</p>
                    <Link to={`/posts/${props.postObj.id}`}>Läs mer ({props.postObj.viewCount || 0} visningar)&nbsp;</Link> 
                </div>
                   
                
            </div>
        </div>
    )
}
