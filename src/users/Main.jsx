
import React, { useState } from 'react'
import { connect } from 'react-redux';
import New from './New';
import Table from './Table';

const Main = ()=>{
 const[compstate, comsetState] = useState(false);
 const[buttonstate, btsetState] = useState(false);

 const compomentChange =()=>{
    comsetState(!compstate);
    btsetState(!buttonstate);

 }

 return(
  <div>
   <div className="text-center mt-3 mb-5 login">
     <h3 className="userstitle">{compstate? '新規登録': '職員一覧'}</h3></div>
    <div className="row">
      <div className="col-md-8 offset-2 bg-light shadow p-3">
        <button 
          className={buttonstate? 'btn btn-secondary' : 'btn btn-primary' + ' mb-5'}
          onClick={compomentChange}
        >{buttonstate? '戻る' : '新規登録'}</button>
      {compstate? <New /> : <Table />}

      </div>
   </div>
  </div>
 )
}
export default connect()(Main);