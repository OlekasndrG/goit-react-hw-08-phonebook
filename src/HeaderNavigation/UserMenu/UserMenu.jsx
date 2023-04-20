import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/AuthOperations';
import { getUserName } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log out
      </button>
    </>
  );
};
