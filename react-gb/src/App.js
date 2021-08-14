import React, { useState } from 'react';
import './App.css';
import Message from './message.js';

const AUTHORS ={
  Me:'Me',
  Bot: 'Bot'
}

function App() {
  
  const[messageList, setMessagelist]=React.useState([]);
  const[inputValue,setInputValue]=React.useState('');

  React.useEffect(()=>{
    if(
      messageList.length &&
      messageList[messageList.length - 1].author != AUTHORS.Bot
    ){
      setTimeout(()=>{
        setMessagelist((currentMessageList)=>[...currentMessageList,
          {author:AUTHORS.Bot,text:'ВААААЗАААААП'},
        ])
      },1500)
  }}, [messageList])

  
  const handleMessageChange = (e) =>{
    setInputValue(e.target.value)
  }
  const handleMessageSub = (e)=>{
    e.preventDefault()

    setMessagelist((currentMessageList)=>[...currentMessageList,
      {author:AUTHORS.Me,text:inputValue},
    ])
    setInputValue('')
  }
  
  return (
    <div className="App App-header">
      {messageList.map((message,index) => (
        <Message key={index} text = {message.text} author={message.author}
        />
      ))}
      <form className='form' onSubmit={handleMessageSub}>
        <input 
        className="input"
        value={inputValue} 
        onChange={handleMessageChange}
        />
        <button className ="input_button">Send</button>

        

      </form>
    </div>
  );
}
export default App;
