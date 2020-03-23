// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// To keep test logs clean, mock logging.
jest.mock('loglevel', () => ({ debug: jest.fn(), log: jest.fn(), warn: jest.fn(), error: jest.fn() }));

global.mount = mount;
global.shallow = shallow;
global.render = render;
