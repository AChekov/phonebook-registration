// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
import { AppContainer } from './App.styled';
import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from 'pages/HomePage/Home';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <p>You can add new contacts below:</p> */}
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
