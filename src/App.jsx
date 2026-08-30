import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Detail from "./components/Detail/Detail.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App