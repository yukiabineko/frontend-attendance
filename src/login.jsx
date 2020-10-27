import React from 'react'
import { connect } from 'react-redux';

const Login = ()=>{
 return(
  <div className="row">
    <div className="text-center login"><h3 className="logintitle">ログイン</h3></div>
     <div className="col-md-6 offset-2 bg-light shadow p-3">
       
     </div>
  </div>
 )
}
export default connect()(Login);