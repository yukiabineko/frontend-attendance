
import {render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import store from '../store/store';
import App from '../App';
import { Provider } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
    render(<Provider store={store}><App/></Provider>, container);
  });
  const headerTitle = container.querySelector('#headertitle');
  expect(headerTitle.textContent).toBe('勤怠システム');

  const headerUsers = container.querySelector('.users');
  expect(headerUsers.textContent).toBe('職員一覧');

  const headerLogin = container.querySelector('.login');
  expect(headerLogin.textContent).toBe('ログイン');
});
