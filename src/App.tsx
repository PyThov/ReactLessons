import Header from "./components/Header"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Counter from "./components/Counter"
import PokeSearcher from "./pages/PokeSearcher"

export default function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/pokesearcher" element={<PokeSearcher />} />
        </Routes>
      </Router>
    </div>
  )
}
