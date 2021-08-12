import Score from './components/Score';
import { useState, createContext } from 'react';
import Squares from './Squares.json';
import Game from './components/Game';
import Start from './components/Start';

export const squareContext = createContext();


const App = () => {
  const [score, setScore] = useState(0)
  const [squares, setSquares] = useState(Squares);
  const [time, setTime] = useState();
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(-3);
  const [bitti, setBitti] = useState(false);
  const [wrongClick, setWrongClick] = useState(0);
  const [isabet, setİsabet] = useState(0);

  var data = {
    squares,
    setSquares,
    score,
    setScore,
    time,
    setTime,
    counter,
    setCounter,
    bitti,
    setBitti,
    show,
    setShow,
    setWrongClick,
    wrongClick,
    setİsabet,
    isabet
  }


  const startSecond = () => {
    var saniye = 3;

    var sn = setInterval(() => {
      saniye = saniye - 1;
      setCounter(saniye)
      if (saniye === 0) {
        clearInterval(sn)
        setShow(false)
      }
    }, 1000);
  }

  const startTable = () => {
    setCounter(3)
    setBitti(true)
    startSecond();
  }

  return (
    <>
      <squareContext.Provider value={data}>
        <Score isabet={isabet} wrongClick={wrongClick} counter={counter} />
        <Game />
        <Start startSecond={startSecond} startTable={startTable} setTime={setTime} time={time} />
      </squareContext.Provider>
    </>
  )
}


export default App