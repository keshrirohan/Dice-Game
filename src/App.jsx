import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Startgame from "./assets/component/Startgame";
import Playing from "./assets/component/playing";

const App = () => {
  let [playGameStatus, setPlayGameStatus] = useState(false);

  return (
    <>
      {playGameStatus ? (
        <Playing></Playing>
      ) : (
        <Startgame
          playGameStatus={playGameStatus}
          setPlayGameStatus={setPlayGameStatus}
        ></Startgame>
      )}
    </>
  );
};

export default App;
