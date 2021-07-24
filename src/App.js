import Products from './component/Products';
import React, { useState } from 'react'
import './App.css'



 function App() {
   const [count, setCount] = useState(0);
   const [isLog, setIsLog] = useState(true);
   const handleClick =()=>{
     setCount(count+1);

   };
   const url = 'https://randomuser.me/api/?results=30';
   const handleLogClick = () =>{
     setIsLog(!isLog)

   }
  return (
    <div className="App">
      {isLog?  <p>We are logged in</p> : <p>We are logged out, please logIn</p>}
      <button onClick={ handleLogClick}>{isLog? <span>Logout</span> : <span>Login</span> }</button>
      <Products count={count} handleClick={handleClick}/>
    </div>
  );
}

export default App;