import { AppContainer } from './App.styled';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import Loader from 'components/Loader';
import PublicRoute from 'components/PublicRoute';

const Home = lazy(() => import('../../pages/HomePage'));
const Register = lazy(() => import('../../pages/RegisterPage'));
const Login = lazy(() => import('../../pages/LoginPage'));
const Contacts = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(!isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <AppContainer>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/login">
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </AppContainer>
    )
  );
};

export default App;
