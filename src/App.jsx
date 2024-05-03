import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn';
import './index.css';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About/About';
import Clubs from './pages/Clubs';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
