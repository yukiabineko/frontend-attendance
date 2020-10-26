
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  return(
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-warning font-weight-bold" href="#" id="headertitle">勤怠システム</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to ='/users' className="text-white font-weight-bold">職員一覧</Link> 
          </li>
        </ul>

        <ul className="navbar-nav mr-right">
          <li className="nav-item active">
            <Link to ='/login' className="text-white font-weight-bold">ログイン</Link> 
          </li>
        </ul>


      </nav>
    </BrowserRouter>
  );
}
export default App;
