import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"
import './index.css'
import ForgotPassword from "./ForgotPassword"
import About from "./About"
import Clubs from "./Clubs"

function App() {

  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign_in" element={<SignIn />}/>
          <Route path="/sign_in/forgot_password" element={<ForgotPassword />}/>
          <Route path="/about_us" element={<About />}/>
          <Route path="/clubs" element={<Clubs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
