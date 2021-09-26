import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import App from './components/App/App';
import Chats from './components/Chats';
import Profile from './components/Profile';

function Router (){
return(
    <div>
<div className="bordered">
      <Link to="/Profile">Profile</Link>
      <Link to="/">Home</Link>
      <Link to="/Chats">Chats</Link>
    </div>
    <Switch>
        <Route path="/" exact/>
        <Route path="/Profile" exact component = {Profile}/>
        <Route path="/Chats" exact component = {Chats}/>
        <Route path="/Chats/:chatId" render ={()=>
        <App/>}/>
    </Switch>
    </div>
    
            
)
};

export default Router;