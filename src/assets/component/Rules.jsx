import React from "react";

const Rules = () => {
  return (
    <>
      <div className="border p-2" style={{
        backgroundColor:"pink"
      }}>
        <h4 className=" fw-bold">How to play dice game</h4>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>

          <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </>
  );
};

export default Rules;
