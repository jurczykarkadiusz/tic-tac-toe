const Cell = ({ id, cell, setCells }) => {
    
    const handleClick = (e) => {
        console.log(e.target)

    }

    return (
        <div className="square" id={id} onClick={handleClick}></div>
    )
}

export default Cell

