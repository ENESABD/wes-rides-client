import { Routes, Route } from 'react-router-dom';

import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import PrivateRoute from './PrivateRoute';

import Landing from './pages/Landing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import EmailSent from './pages/EmailSent';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import MyRides from './pages/MyRides';
import NewRide from './pages/NewRide';
import PasswordReset from './pages/PasswordReset';
import Profile from './pages/Profile';
import Ride from './pages/Ride';
import RideInterest from './pages/RideInterest';
import SignUp from './pages/SignUp';

function App() {

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? <Navbar2/> : <Navbar1/>}
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route index element={isAuthenticated ? <Home/> : <Landing/>} />

        <Route element={<PrivateRoute isAllowed={!isAuthenticated}/>}>
          <Route path="/email-sent" element={<EmailSent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/password-reset/:jwt" element={<PasswordReset/>} />
        </Route>
        
        <Route element={<PrivateRoute isAllowed={isAuthenticated}/>}>
          <Route path="/ride/:id" element={<Ride/>} />
          <Route path="/ride-interest/:id" element={<RideInterest/>} />
          <Route path="/new-ride" element={<NewRide/>} />
          <Route path="/my-rides" element={<MyRides/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
