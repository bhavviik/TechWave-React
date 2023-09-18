import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import Footer from "./Components/Footer"
import Store from "./Components/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/Store" element={<Store />}>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
