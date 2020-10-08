import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// Little fix for Jest, see https://stackoverflow.com/a/54175600
require('mysql2/node_modules/iconv-lite').encodingExists('foo');