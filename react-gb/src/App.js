import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
import Message from './message.js';
import ChatMenu from './ChatsMenu.js';


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
      messageList[messageList.length - 1].author !== AUTHORS.Bot
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
      <div>
      <ChatMenu/>
      </div>
      <div>
      {messageList.map((message,index) => (
        <Message key={index} text = {message.text} author={message.author}
        />
      ))}
      <form className='form' onSubmit={handleMessageSub}>
         <TextField 
         autoFocus
         id="outlined-basic" 
         label="Message..." 
         variant="outlined"
          value={inputValue} 
        onChange={handleMessageChange} />
        <Button  variant="contained" color="primary" type="submit">
        Send
      </Button>

        

      </form>

      </div>
      
    </div>
  );
}
export default App;
