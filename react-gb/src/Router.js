import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Chats from './components/Chats';
import Profile from './components/Profile';
import CatFacts from './components/CatFacts';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Chat from './components/Chat';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { changeIsAuth } from './state/actions/profile';
import { useDispatch} from 'react-redux';

const PrivateRoute =(props)=>{
    const isAuthed= useSelector((state) => state.profile.isAuthed)
    return isAuthed ? <Route {...props}/> : <Redirect to="/Login"/>
}

function Router (){
    const dispatch = useDispatch()
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        console.log('onAuthStateChanged', { user })
          dispatch(changeIsAuth(Boolean(user)))
        
    })
}, [])
const handleSignOut=(e)=>{
    e.preventDefault()
    firebase.auth().signOut()

}
return(
    <div>
        <div className="bordered">
      <Link to="/Profile">Profile</Link>
      <Link to="/">Home</Link>
      <Link to="/Chats">Chats</Link>
      <Link to="/CatFacts">Cat's Facts</Link>
      <Link to="/Login">Login</Link>
      <a href="/" onClick={handleSignOut}>Sign Out</a>

    </div>
    <Switch>
    
        <Route path="/" exact/>
        <PrivateRoute path="/Profile" exact component = {Profile}/>
        <PrivateRoute path="/Chats" exact component = {Chats}/>
        <PrivateRoute path="/Chats/:chatId" render ={()=>
        <Chat/>}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/CatFacts" exact component = {CatFacts}/>
    </Switch>
    </div>
    
            
)
};

export default Router;