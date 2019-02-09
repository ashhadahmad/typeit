import React, { Component } from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import CreateProject from './components/projects/CreateProject'
import Footer from './components/layout/footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component = {Signin} />
            <Route path='/signup' component = {Signup} />
            <Route path='/create' component = {CreateProject} />

            <Redirect to='/' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
