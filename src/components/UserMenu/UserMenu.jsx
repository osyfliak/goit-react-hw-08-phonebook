import {Button} from '../Contact/Style.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selector';
import { logOutThunk } from 'redux/auth/auth-thunk';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className="d-flex align-items-center">
      {user && (
        <>
          <p>Hello : {user?.email}</p>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </div>
  );
};
