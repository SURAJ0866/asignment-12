import React from 'react';
import { useState } from 'react';
function Luckynumber() {
    const [number, setNumber] = useState();
    const [attempt, setAttempt] = useState(1);
    const [luckynumber, setLuckynumber] = useState(Math.round((Math.random()*10)));
    console.log(luckynumber);
   function getInput(e){
    setNumber(e.target.value)
   }
  function handleInput(){
    if(number<0||number>10){
        alert("warning:Enter number betwwen 0 and 10");
        return
    }
    setAttempt(attempt+1);
    if(number==luckynumber){
        alert("congrates you get it"+attempt)
    }else if(number<luckynumber){
        alert("your number is less then lucky number")
    }else{
        alert("your number is greater then lucky number")
    }
  }








  return (
    <div className='contaner'>
      <h1>number is betwwen 0 to 10</h1>
      <input type="text" placeholder='guess lucky number'onChange={getInput} />
      <button onClick={handleInput} value="10">match number</button>
    </div>
  );
}

export default Luckynumber;
