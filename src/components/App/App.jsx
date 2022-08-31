// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
import { AppContainer } from './App.styled';
import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage';

const App = () => {
  return (
    <AppContainer>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
