
import {render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

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
/*ヘッダーチェック*/
test('header check', () => {
  act(()=>{
    render(<App />, container);
  });
  const headerTitle = container.querySelector('#headertitle');
  expect(headerTitle.textContent).toBe('勤怠システム');
});