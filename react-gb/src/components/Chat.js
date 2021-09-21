import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithThunk,subMessageChange } from '../state/actions/message';
import AUTHORS from './App/constants';
import useIsChatExists from './hooks/isChatExist';
import { Redirect, useParams } from 'react-router';
import Message from './message';
import Input from './Input';


function Chat (props){
    const dispatch=useDispatch()
    const { chatId } = useParams()
    const messageList = useSelector((state) => state.message[chatId] || [])
    
  React.useEffect(()=>{
    dispatch(subMessageChange(chatId))
  },[])
  
    const handleMessageSub = (newText)=>{
      dispatch(
        addMessageWithThunk(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.ME,
            text: newText,
        })
    )
  }
  const isChatExists = useIsChatExists({ chatId })
  
      if (!isChatExists) {
          return <Redirect to="/chats" />
      }
    
    return (
      <div className="App App-header">
        <div>
          {messageList.length?(
            <div>
              {messageList.map((message) => (
              <Message key={message.id}
               text = {message.text} 
               author={message.author}
              />
            ))}
            </div>
            
          ):<p>Сообщений пока нет </p>}
        
         <Input onSubmit={handleMessageSub} />
  
        </div>
        
      </div>
    );
        
}

export default Chat;