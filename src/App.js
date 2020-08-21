import React from 'react';
import {sum, subtract, multiply, div} from "./Calc";

var curhour = new Date(2020,8,17,11);
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
    <div>
      <h1>Hello Sir <span style ={cssstyle}> {greeting}</span></h1>
    </div>
  );
}

function Apptwo() {
  return(
<div >
  <ol>
    <li>sum of two numbers bineet {sum(40,4)} </li>
    <li>subtraction of two numbers {subtract(40,4)} </li>
    <li>Multiply of two numbers {multiply(40,4)} </li>
    <li>divison of two numbers {div(40,4)} </li>
  </ol>
</div>
  );
}

export {App,Apptwo};
