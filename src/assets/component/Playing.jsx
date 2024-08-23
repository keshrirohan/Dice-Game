import React, { useState } from "react";
import Rules from "./Rules";
const Playing = () => {

  let dice = [1, 2, 3, 4, 5, 6];
  
  let [rulesStatus, setRulesStatus] = useState(false);
  let [selectedValue, setSelectedValue] = useState(0);
  let [randomNumber, setRandomNumber] = useState(1);
  let[numberSelected,setNumberSelected]=useState(false)
  let[msgStatus,setMsgStatus]=useState(false);
  let [score, setScore] = useState(0);
  let handleSelectedNumber=(item)=>{
    setSelectedValue(item);
   
    
  }
  let handleRandomNumber = () => {
  
    setNumberSelected(!numberSelected);
   
    if (selectedValue != 0) {
      setMsgStatus(false);
    
      let newRandomNumber = Math.floor(Math.random() * 6) + 1;
      setRandomNumber(newRandomNumber);  

      if (newRandomNumber === selectedValue) {
        setScore((prevScore)=> prevScore+newRandomNumber);
      } else {
        setScore((prevScore)=>prevScore-2);
      }
    }
    else{
      setMsgStatus(true);
      
    }
  };
  return (
    <div className=" container-fluid ">
      <div className="topPart d-flex justify-content-between container mt-2">
        <div className="scoreCard d-flex flex-column justify-content-center align-content-center  ">
          <div className="score text-center fs-1">{score}</div>
          <h2 className="text-center">Total Score</h2>
        </div>
        <div className="selection d-flex flex-column justify-content-center align-items-end gap-3 flex-wrap">
          <div className="numberDice d-flex justify-content-center align-items-center gap-3 flex-wrap">
            {" "}
            
            {dice.map((item, index) => (
              <span
                className={`px-3 py-2  btn btn-outline-dark  `}
                style={{background: selectedValue===item ? "black":"",color: selectedValue===item ? "white":"" }}
                onClick={()=>handleSelectedNumber(item)}
                value={index + 1}
              >
                {item}
              </span>
            ))}
          </div>
          {msgStatus?<h4 className="text-danger">Select a Number to continue</h4>:<h4>choose a number</h4>}
        </div>
      </div>
      <div
        className="middlePart py-4 d-flex flex-column align-items-center container justify-content-center
         "
      >
        <div className="img-fluid p-3" onClick={handleRandomNumber}>
          <img
            className=""
            src={`./public/images/dice/dice_${randomNumber}.png`}
            alt=""
          />
        </div>
        <h2>Click on dice to play</h2>
        <h3 className="btn btn-outline-dark px-3 py-2" onClick={()=>setScore(0)}>Reset Score</h3>
        <h3
          className="btn btn-dark px-3 py-2 "
          onClick={() => setRulesStatus(!rulesStatus)}
        >
          Show Rules
        </h3>
      </div>
      <div className=" container lowerPart d-flex justify-content-center align-content-center gap-2">
        {rulesStatus ? <Rules></Rules> : ""}
      </div>
    </div>
  );
};

export default Playing;
