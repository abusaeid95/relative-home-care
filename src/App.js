
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Donate from './Component/Pages/Donate';
import NotFound from './Component/NotFound/NotFound';
import Message from './Component/Pages/Message/Message';
import AboutUs from './Component/Pages/AboutUs/AboutUs';
import Team from './Component/Pages/Team';
import LogOut from './Component/LogOut/LogOut';
import Home from './Component/Pages/Home/Home/Home';
import Services from './Component/Pages/Home/Home/Services/Services';
import Footer from './Component/Pages/Home/Footer/Footer'
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SigIn/SignIn';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceDatails from './Component/ServiceDatails/ServiceDatails';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDatails></ServiceDatails>
            </PrivateRoute>
            <Route path="/donate">
              <Donate></Donate>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contactus">
              <Message></Message>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/logout">
              <LogOut></LogOut>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;