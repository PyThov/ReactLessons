import Header from "./components/Header"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Counter from "./components/Counter"
import PokeSearcher from "./pages/PokeSearcher"
import Home from "./pages/Home/Home"
import WorkerPage from "./pages/WorkerPage"
import ApiPage from "./pages/ApiPage/ApiPage"

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
          <Route path ="/api-1" element={<ApiPage />}/>
          <Route path ="/api-2" element={<ApiPage />}/>
        </Routes>
      </Router>
    </div>
  )
}
