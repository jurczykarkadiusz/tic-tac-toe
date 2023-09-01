const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
    const handleClick = (e) => {
        const firstChild = e.target.firstChild;
      
        if (firstChild && !firstChild.classList.contains("circle") && !firstChild.classList.contains("cross")) {
          if (go === "circle") {
            firstChild.classList.add("circle");
            handleCellChange("circle");
            setGo("cross");
          }
          if (go === "cross") {
            firstChild.classList.add("cross");
            handleCellChange("cross");
            setGo("circle");
          }
        }
      };
      
    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells )
    }

    return (
        <div className="square" id={id} onClick={!winningMessage ? handleClick : undefined}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell

