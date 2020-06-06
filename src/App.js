import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Villes from "./pages/Villes";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Chambre from "./pages/Chambre"

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hotel from './pages/Hotel'
import Admin from './Admin/Admin'
import Loginn from './Admin/Login'
import PrivateRoute from './Admin/PrivateRoute'




function App() {
  return (
    <>
    <Navbar />
    <Switch>
       <Route exact path="/" component= {Home} />
       <Route exact path="/villes/" component= {Villes} />
       <Route exact path="/hotels" component= {Hotels} />
       <Route exact path= "/hotels/:slug" component= {Chambre} />
       <Route exact path="/login/" component= {Login} />
       <Route exact path="/hotel/" component= {Hotel} />
       <Route component={Error} />


       <Route path="/loginn" component={Loginn} />
         
          <PrivateRoute
            exact
            // authed={fakeAuth.isAuthenticated}
            path="/admin"
            component={Admin}
          />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
