import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestStyledComponents from 'jest-styled-components';

configure({ adapter: new Adapter() });
export { shallow, mount, render, JestStyledComponents };
export default Enzyme;
