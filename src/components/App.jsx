import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/auth-thunk';
import Contact from '../pages/ContactPage/Contact';
import NavBar from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};