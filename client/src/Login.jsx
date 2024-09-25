import React, {useState}  from 'react'
import Input from './Input'
import Button from './Button'
import Greeting from './Greeting'
import './App.css'



const Login = (props)=>{
    const [contact , setContact] = useState({
        username:'',
        password:''
    })
const handleClick = async ()=>{
    await fetch ('http://localhost:3007',{
        method:'post',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify({
            username: contact.username,
            password: contact.password

        })
    })
    .then(response => response.json())
    .then(data=>json.parse(data))
    .catch(err =>{
        console.log("error:" + err)
    })
}
 

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    return <div className= 'header-div'>

       <Greeting 
       htext = {contact.username}
       ptext = {contact.password}
       />

       <Input 
       name= 'username'
       type= 'text'
       placeholder ='username'
       onChange = {handleChange}
       value = {contact.username}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>

       <Button 
           type = 'submit'
           text='Login'
           onClick= {handleClick}
       />

    </div>

}
export default Login