import Header from "./components/Header"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Counter from "./components/Counter"
import PokeSearcher from "./pages/PokeSearcher"
import Home from "./pages/Home/Home"
import WorkerPage from "./pages/Worker"

export default function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/worker" element={<WorkerPage />}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/pokesearcher" element={<PokeSearcher />} />
        </Routes>
      </Router>
    </div>
  )
}
