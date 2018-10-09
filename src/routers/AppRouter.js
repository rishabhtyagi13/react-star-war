import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Logout from '../components/LogoutPage';
import {connect} from 'react-redux';
import {PrivateRoute } from 'react-router-with-props';
const AppRouter = (props) => (
  
  <BrowserRouter>
    <div>
      <Header />
      
      <Switch>
        <Route path="/" component={Home} exact />
        {/*Private Route is used to allow the access only when user has logged in */}
        <PrivateRoute exact path="/search" authed={props.userdata.count} redirectTo="/" component={Search} text="This is a private route"/>
        <Route path="/logout" component={Logout} />
        <Route component={NotFoundPage} />
      </Switch>
      
      <Footer/>
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => {
  return {
    userdata: state.getUserInfo.userdata,
    error: state.getUserInfo.error
  }
};

export default connect(mapStateToProps)(AppRouter);
