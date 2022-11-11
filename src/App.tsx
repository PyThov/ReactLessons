import React from "react"
import Header from "./components/Header"
import "./App.css"

function App() {
  const [count, setCount] = React.useState(0)

  function handleIncrement(){
    setCount(count + 1)
  }

  return (
    <div>
      <Header />
      <div className="homePage">
        <div style={{padding: "10px"}}>
          Count: {count}
        </div>
        <button className="incrementButton" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

export default App
