import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const userName = useSelector(getUserName);
  // console.log(userName);
  // console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace={true} />;
}
// redirect
