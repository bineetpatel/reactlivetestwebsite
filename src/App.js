import React, { useState } from 'react';
import {sum, subtract, multiply, div} from "./Calc";
import './index.css';

var curhour = new Date();
curhour = curhour.getHours();
let greeting = '';
const cssstyle = { };

if(curhour >= 1 && curhour < 4){
  greeting = "Good Morning";
  cssstyle.color = 'green';
}else if(curhour >= 12  && curhour <19){
  greeting = "Good Afternonn";
  cssstyle.color = 'orange';
}else{
  greeting = "Good Night";
  cssstyle.color = 'red';
}
function App() {
  return (
    <div  className = "main-one">
      <h1>Hello Sir <span style ={cssstyle}> {greeting}</span></h1>
    </div>
  );
}

function Apptwo() {
  return(
<div className = "main-one" >
  <ol>
    <li>sum of two numbers bineet {sum(40,4)} </li>
    <li>subtraction of two numbers {subtract(40,4)} </li>
    <li>Multiply of two numbers {multiply(40,4)} </li>
    <li>divison of two numbers {div(40,4)} </li>
  </ol>
</div>
  );
}
 const Appthree = () => {
      const [count,updatedCount] =useState(5);
      const IncNum = () => {
        updatedCount(count+1);
        //console.log(`clciked by bineet ${count++}`);
        }
        return(
    <div className = "main-one">
    <h1> {count} </h1>
    <button onClick = {IncNum}>Count using usestate</button>
    </div>
  );
} 

const Appfour =() =>{
  
  let mydate = new Date().toLocaleTimeString(); 
  const[curdate, update] = useState(mydate);
   const myClock = () =>{
     mydate = new Date().toLocaleTimeString();
     update(mydate);
     }
   return(
    <div className = "main-one">
    <h1> Digital clock onclick {curdate} </h1>
    <button onClick = {myClock} >my clock refresh</button>
    </div>
   );
}

const Appfive =() =>{
  
  let mydate = new Date().toLocaleTimeString(); 
  const[curdate, update] = useState(mydate);
  const myClock = () =>{
     mydate = new Date().toLocaleTimeString();
     update(mydate);
     };
  setInterval(myClock,1000)

   return(
    <div className = "main-one">
    <h1> Digital clock Refresh {curdate} </h1>
    </div>
   );
}

export {App,Apptwo,Appthree,Appfour,Appfive};
