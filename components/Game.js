import { squareContext } from '../App.js'
import { useContext, useState, useEffect } from 'react';
import SquareList from './SquareList';

const Game = () => {

    const data = useContext(squareContext);
    const [squareList] = useState(data.squares);
    const [squares, setSquares] = useState(data.squares);
    const [selectedItem, setSelectedItem] = useState();
    const setScore = data.setScore;
    const score = data.score;
    const setWrongClick = data.setWrongClick;
    const wrongClick = data.wrongClick;
    const setİsabet = data.setİsabet
    const isabet = data.isabet

    useEffect(() => {
        const num = Math.floor(Math.random() * 25 + 1)

        setSquares(squareList.map(item => {
            if (item.id !== num) {
                item.selected = false
            }
            else {
                item.selected = true
            }
            return item
        }))

    }, [squareList])

    useEffect(() => {
        setSelectedItem(squares.filter(item => item.selected !== false))
    }, [squares])

    const changed = (square) => {
        if (square.selected === true) {
            setİsabet(isabet + 1);
            setScore(score + 3);

            const num = Math.floor(Math.random() * 25 + 1)

            setSquares(squareList.map(item => {
                if (item.id !== num) {
                    item.selected = false
                }
                else {
                    item.selected = true
                }
                return item
            }))
        }
        else {
            setScore(score - 1)
            setWrongClick(wrongClick + 1)
        }
    }

    return (
        <div className="game">
            <div className="game-container">
                <ul className="square-ul">
                    {
                        squares.map(square => (
                            <SquareList changed={changed} key={square.id} square={square} selectedItem={selectedItem} />
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Game
