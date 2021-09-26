import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import App from './App';
import ChatMenu from './components/ChatsMenu';
import Profile from './components/Profile';

function Router (){
return(
    <div>
<div className="bordered">
      <Link to="/Profile">Profile</Link>
      <Link to="/">Home</Link>
      <Link to="/ChatsMenu">Chats</Link>
    </div>
    <Switch>
        <Route path="/" exact/>
        <Route path="/Profile" exact component = {Profile}/>
        <Route path="/ChatsMenu" exact component = {ChatMenu}/>
        <Route path="/ChatsMenu/:chatId" render ={()=>
        <App/>}/>
    </Switch>
    </div>
    
            
)
};

export default Router;