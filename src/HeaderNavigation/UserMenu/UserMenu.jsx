
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/AuthOperations';
import { getUserName } from 'redux/selectors';
import { UserMenuButton, UserMenuContainer } from './USerMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <UserMenuContainer>
      <p>Welcome, {userName}</p>
      <UserMenuButton type="button" onClick={() => dispatch(logOutUser())}>
        Log out
      </UserMenuButton>
    </UserMenuContainer>
  );
};
