import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Greeting from './Greeting';
import Subscribe from './subscribe';
import Footer from './footer';

function App() {
  const [text,setText] = useState('')
  const changeText = () => {r
      setText(text)
  }
  return <div className= 'header-div'>
  <br></br>
  
  <br></br>
   <Login 
   />
   <br></br>
   <Subscribe />
   <br></br>
  <Footer/>
  </div>
}

export default App;
