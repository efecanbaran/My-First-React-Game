import { squareContext } from '../App.js'
import React, { useContext, useEffect, useState } from 'react';


const Score = ({ counter, wrongClick, isabet }) => {

    const { score, time, setTime } = useContext(squareContext);
    const [scoreTable, setScoreTable] = useState(false);

    useEffect(() => {
        if (counter === 0) {
            setTime(5)
            const sayacc = () => {
                var saniye = 5;
                var sn = setInterval(() => {
                    saniye = saniye - 1;
                    setTime(saniye)
                    if (saniye === 0) {
                        clearInterval(sn)
                        setScoreTable(true)
                    }
                    else if (saniye > 0) {
                    }
                }, 1000);
            }
            sayacc();
        }

    }, [setTime, counter])



    return (
        <>
            <nav className="score-bar">
                <ul>
                    <li>
                        <h1>SCORE : {score}</h1>
                    </li>
                    <li>
                        <h1>TIME REMAINING : {time}</h1>
                    </li>
                </ul>
            </nav>
            {
                scoreTable ?
                    <div className="start">
                        <div className="start-modal-2">
                            <h1>Score: {score}</h1>
                            <h2>HİT: {isabet}</h2>
                            <h2>Miss: {wrongClick}</h2>
                            <div className="cups">
                                <i className="fas fa-trophy"></i>
                                <i className="fas fa-trophy"></i>
                                <i className="fas fa-trophy"></i>
                                <i className="fas fa-trophy"></i>
                                <i className="fas fa-trophy"></i>
                                <i className="fas fa-trophy"></i>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Score
