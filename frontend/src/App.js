import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import LoginFailed from './components/pages/LoginFailed';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import { LoginUserProvider } from './components/providers/LoginUserProvider';
import Footer from './components/templates/Footer';
import RegisterSucceeded from './components/pages/RegisterSucceeded';
import Registerfailed from './components/pages/Registerfailed';

function App() {
  return (
    <LoginUserProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginfailed" element={<LoginFailed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registersucceeded" element={<RegisterSucceeded />} />
        <Route path="/registerfailed" element={<Registerfailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer/>
    </LoginUserProvider>
  );
}

export default App;
