import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import './App.css';

import PageForm from './components/form'


function App() {
  return (
<BrowserRouter>
   <div>


     <Navbar />
<Route exact path="/" component={Landing} />
       <div className="container">
         <Route exact path="/register" component={Register} />
         <Route exact path="/login" component={Login} />
         <Route exact path ="/profile" component={Profile} />
	       <Route exact path="/search" component={PageForm} />
       </div>

   
     </div>
</BrowserRouter>
   

  );
}

export default App;
