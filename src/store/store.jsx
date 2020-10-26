import { createStore } from "redux";

const init_data={
  data: [],
  message: ''
};

const dataReducer = (state = init_data, action)=>{
 switch (action.type) {
  case 'ADD':
   break;
 
  default:
   return state;
 }
}

export default createStore(dataReducer)
