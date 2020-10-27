import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './users/Main';
import Login from './login';
import { connect } from 'react-redux';

const App = ()=>{
  return(
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-warning font-weight-bold" href="#" id="headertitle">勤怠システム</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to ='/' className="text-white font-weight-bold users">職員一覧</Link> 
          </li>
        </ul>

        <ul className="navbar-nav mr-right">
          <li className="nav-item active">
            <Link to ='/login' className="text-white font-weight-bold login">ログイン</Link> 
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Users} />
      <Route exact path="/login" component={Login} />
      

    </BrowserRouter>
  );
}
export default connect()(App)
