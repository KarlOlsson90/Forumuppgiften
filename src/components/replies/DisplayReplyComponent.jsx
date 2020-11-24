import React from 'react'

export default function DisplayReplyComponent(props) {
    return (
        <>
            <br></br>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm">
                            <h5>{props.reply.author.firstName} {props.reply.author.lastName}</h5>
                        </div>
                        <div className="col-sm">
                            <div className="float-right">
                            {props.convertedDate(props.reply.createdAt)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">

                    <h5>{props.reply.title}</h5>
                    {props.reply.content}
                </div>
            </div>
        </>
    )
}
