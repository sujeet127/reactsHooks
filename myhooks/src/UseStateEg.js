import React ,{useState}from 'react';

export default   function UseStateEg() {
    var [myName,setMyName]=useState("My name is Sujeet");
    let changeState=()=>{
      let val=myName;
      if(myName==="My name is Sujeet")
        setMyName("My name is Sandy");
        else
        setMyName("My name is Sujeet");
    }
  return (
    <div className="App">
      
     <h1>{myName}</h1>
    
            <button className="btn" onClick={changeState}>click me plz</button>
    
    </div>
  );S
}