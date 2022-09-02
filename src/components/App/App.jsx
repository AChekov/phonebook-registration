import { AppContainer } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
// import HomePage from 'pages/HomePage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';

const Home = lazy(() => import('../../pages/HomePage'));
const Register = lazy(() => import('../../pages/RegisterPage'));
const Login = lazy(() => import('../../pages/LoginPage'));
const Contacts = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}

          <PrivateRoute path="/contacts">
            <Contacts />
          </PrivateRoute>
        </Routes>
      </Suspense>
      <ToastContainer />
    </AppContainer>
  );
};

export default App;
