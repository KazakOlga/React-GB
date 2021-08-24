import React from 'react';
import ListItem from '@material-ui/core/ListItem';

function Chat (props){
    return (
        <ListItem >
            <h3 className = "chatAuthor">{props.chatAuthor} </h3>
            </ListItem>
        
    )
        
}

export default Chat;