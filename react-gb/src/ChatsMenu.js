import React from 'react';
import Chat from './Chat.js';
import List from '@material-ui/core/List';



function ChatMenu(){
    const [chatList,setChatList] =React.useState([]);

    React.useEffect(()=>{
        setChatList((currentChatList)=>[...currentChatList,
            {id:'lfvkn',author:'Alice'},
            {id:'lfkn',author:'Polin'},
            {id:'lvkn',author:'Blake'},
            {id:'fvkn',author:'Max'},
            {id:'lfvfkn',author:'Alex'},
              ]);
              
      }, [])
    

    

return(
    <List >
        
        {chatList.map((chat,id)=>
        <Chat key = {id} chatAuthor = {chat.author}/>
        )}
    </List>
)
    
}





export default ChatMenu;