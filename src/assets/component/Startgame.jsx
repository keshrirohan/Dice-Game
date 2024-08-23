import React from 'react'

const Startgame = ({playGameStatus,setPlayGameStatus}) => {
  return (
    <div className="   d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
      <div className=" d-md-flex container   m-auto align-items-center justify-content-center h-auto ">
        <div className="leftsection d-flex justify-content-center  align-items-center   overflow-hidden container">
          <img
            src="./public/images/dices.png"
            alt=""
            className=" p-3 img-fluid"
          />
        </div>
        <div className="rightsection  d-flex flex-column align-items-center align-items-md-start  justify-content-center    container  flex-md-column">
          <h1 className="fs-1">Dice Media</h1>
          <button className="btn btn-dark px-3 py-2" onClick={()=>setPlayGameStatus(!playGameStatus)}>Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default Startgame