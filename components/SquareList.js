
const SquareList = ({ changed, square }) => {


    return (
        <li onClick={() => changed(square)} className={`square-li ${square.selected !== false ? 'selected' : null}`}>

        </li>
    )
}

export default SquareList


