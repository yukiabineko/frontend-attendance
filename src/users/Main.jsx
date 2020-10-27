import React from 'react'
import { connect } from 'react-redux';

const Main = ()=>{
 return(
  <div>
   <div className="text-center mt-3 mb-5 login"><h3 className="userstitle">職員一覧</h3></div>
    <div className="row">
      <div className="col-md-8 offset-2 bg-light shadow p-3">
    </div>
   </div>
  </div>
 )
}
export default connect()(Main);