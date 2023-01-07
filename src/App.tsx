import Header from "./components/Header"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Counter from "./components/Counter"

export default function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  )
}
