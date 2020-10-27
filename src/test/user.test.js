import {render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import store from '../store/store';
import User from '../users/Main';
import { Provider } from 'react-redux';

let container = null;

beforeEach(()=>{
  container = document.createElement('div');
  document.body.appendChild(container);
 
});
afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('users', ()=>{
  it('title show', () => {
   act(()=>{
    render(<Provider store={store}><User/></Provider>,container);
   });
   const title = container.querySelector('.userstitle');
   expect(title.textContent).toBe('職員一覧');
  });
});