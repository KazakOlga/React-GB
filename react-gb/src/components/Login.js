import React from 'react'
import firebase from 'firebase'

export default function Login (props){
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [error,setError]=React.useState('')
    const [isSigningUp, setIsSigningUp]=React.useState(false)

    const handleChangeEmail = e=>setEmail(e.target.value)
    const handleChangePassword = e=>setPassword(e.target.value)
    const handleSigningUpChange= e => setIsSigningUp(e.target.checked)
    const handleLogin= async()=>{
        try {
            await firebase.auth().signInWithEmailAndPassword(email,password)
         } catch(error){
             setError(error.message)
         }  

    }
    const handleSignUp= async()=>{
        try {
            await firebase.auth().createUserWithEmailAndPassword(email,password)
         } catch(error){
             setError(error.message)
         } 
    }
    const handleSubmit =()=>{
        console.log ('Мы пытаемся залогиниться')
        if (!email||!password){
            setError("Заполните все поля")
            return
        }
        if(isSigningUp){
            handleSignUp()
            return
        }
        handleLogin()
    }

    
    return <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <input
          type="checkbox"
          checked={isSigningUp}
          onChange={handleSigningUpChange}
          />
          <label>{isSigningUp? <p>Уже есть учетная запись</p>:<p>Еще нет учетной записи?</p>}</label>
        <p>Login</p>
        <input placeholder="Email" value={email} type="email" onChange={handleChangeEmail}/>
        <input placeholder="Password" value={password} type="text" onChange={handleChangePassword} />
        <button onClick={handleSubmit}> {isSigningUp?"Sign Up": "Login"}</button>
        <p>{error}</p>

    </div> 
}