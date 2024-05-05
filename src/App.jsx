import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import './index.css';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About/About';
import Clubs from './pages/Clubs/Clubs';
import News from './components/News/News';
import Contacts from './pages/Contacts/Contacts';
import SduAlumni from './pages/sduAlumni/sduAlumni';
import AdminPage from './pages/AdminPage/AdminPage';
import Quote from './pages/Quote/Quote';

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
          <Route path="/sdu_alumni" element={<SduAlumni />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
