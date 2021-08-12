import React, { useContext } from 'react'
import { squareContext } from '../App';

const Start = ({ startTable }) => {
    const data = useContext(squareContext);
    const { show, counter, bitti } = data

    return (
        <>
            {
                show ?

                    <div className={`start`}>
                        <div className="start-modal">
                            {
                                bitti ?
                                    <h1 style={{ fontSize: 60 }}>{counter}</h1>
                                    :
                                    <button onClick={startTable}>Start</button>
                            }


                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Start
