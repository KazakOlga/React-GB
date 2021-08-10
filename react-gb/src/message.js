import React from 'react';

function Message (props){
    return (
        <div className = "message">
            <h3 className = "author"> от {props.author} </h3>
        <p className = "body_message"> {props.body} </p>
            </div>
        
    )
        
}

export default Message;