import React from 'react';
import './App.css';
import Message from '../message.js';
import AUTHORS from './constants.js'
import { useDispatch, useSelector } from 'react-redux';
import {addMessageWithThunk } from '../../state/actions/message';
import { Redirect, useParams } from 'react-router';
import Input from '../Input'
import useIsChatExists from '../hooks/isChatExist'



function App(props) {

  const { chatId } = useParams()
  const messageList = useSelector((state) => state.message[chatId] || [])
  const dispatch = useDispatch()
 


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


export default App;
