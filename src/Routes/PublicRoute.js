import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {  getIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    //   const userName = useSelector(getUserName);
  return isLoggedIn ? <Navigate to="/" replace={true} /> : children;
}
