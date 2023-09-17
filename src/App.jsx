import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import Footer from "./Components/Footer"
import Store from "./Components/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter  basename="/TechWave-react">
        <Navbar />
        <Routes>
          <Route path="/Store" element={<Store />}>
          </Route>
          <Route exact path="/TechWave-react" element={<HomePage />}></Route>
        </Routes>
        <HomePage />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
