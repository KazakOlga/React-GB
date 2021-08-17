import React from 'react';
import Chat from './Chat.js';



function ChatMenu(){
    const [chatList,setChatList] =React.useState('');

    setChatList((currentChatList)=>[...currentChatList,
        {author:'Alice', id:'lfvkn'},
        {author:'Bread', id:'lfxkn'},
        {author:'Liam', id:'lfbbkn'},
          ]);

    

return(
    <div className="chat_list">
        {chatList.map((author,id)=>
        <Chat key = {id} chatAuthor = {chatList.author}/>
        )}
       
        
      
    </div>
)
    
}





export default ChatMenu;