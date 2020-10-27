import React, { useState } from 'react'
import { connect } from 'react-redux';

const New = ()=>{
 const[state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: ''
 });
 const doChange = (e)=>{
  switch (e.target.name) {
   case 'name':
    setState({
     name: e.target.value,
     email: state.email,
     password: state.password,
     confirmation: state.confirmation
    });
    break;
   case 'mail':
    setState({
     name: state.name,
     email: e.target.value,
     password: state.password,
     confirmation: state.confirmation
    });
    break;
   case 'pass':
    setState({
     name: state.name,
     email: state.email,
     password: e.target.value,
     confirmation: state.confirmation
    });
    break;
   case 'conf':
    setState({
     name: state.name,
     email: state.email,
     password: state.password,
     confirmation: e.target.value
    });
    break;
  
   default:
    break;
  }
 }
 const doSubmit =(e)=>{
  e.preventDefault();
  alert(JSON.stringify(state));
 }
 return(
  <div class="mt-5">
   <div className="row">
    <div className="col-md-8 offset-2 bg-white p-3">
     <form onSubmit={doSubmit}>
       <div className="form-group">
         <label htmlFor="nameinput">名前入力</label>
         <input type="text"
           className="form-control"
           name="name"
           onChange={doChange}
           value={state.name}
           required
         />
       </div>

       <div className="form-group">
         <label htmlFor="nameinput">メールアドレス</label>
         <input type="email"
           className="form-control"
           name="mail"
           onChange={doChange}
           value={state.email}
           required
         />
       </div>

       <div className="form-group">
         <label htmlFor="nameinput">パスワード</label>
         <input type="password"
           className="form-control"
           onChange={doChange}
           value={state.password}
           name="pass"
         />
       </div>

       <div className="form-group">
         <label htmlFor="nameinput">パスワード確認</label>
         <input type="password"
           className="form-control"
           onChange={doChange}
           value={state.confirmation}
           name="conf"
         />
       </div>
       <button className="btn btn-primary btn-block mt-5">登録</button>
     </form>

    </div>
   </div>
  　
  </div>
 )
}
export default connect()(New);