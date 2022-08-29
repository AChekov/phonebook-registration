// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
import { AppContainer } from './App.styled';
import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage/Home';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

const App = () => {
  return (
    <AppContainer>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <ContactForm /> */}
        {/* <p>Your Contacts:</p> */}
        {/* <Filter />
        <ContactList />
        <ToastContainer autoClose={2500} /> */}
      </Routes>
    </AppContainer>
  );
};

export default App;
