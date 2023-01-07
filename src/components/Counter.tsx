import React from "react"

export default function Counter(){
    const [count, setCount] = React.useState(0)
  
    function handleIncrement(){
      setCount(count + 1)
    }
    
    return (
      <div className="homePage">
      <div style={{padding: "10px", color: "#444"}}>
        Count: {count}
      </div>
      <button className="incrementButton" onClick={handleIncrement}>
        +
      </button>
    </div>
    )
}