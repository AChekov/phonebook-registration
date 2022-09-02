import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
