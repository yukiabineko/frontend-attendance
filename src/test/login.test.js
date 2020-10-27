
import {render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import store from '../store/store';
import Login from '../login';
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
    render(<Provider store={store}><Login/></Provider>,container);
   });
   const title = container.querySelector('.logintitle');
   expect(title.textContent).toBe('ログイン');
  });
});