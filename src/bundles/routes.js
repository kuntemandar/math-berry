import { createRouteBundle } from 'redux-bundler'
import Main from '../components/main'
import Add from '../components/add'
import Substract from '../components/substract'
import Multiply from '../components/multiply'
import Divide from '../components/divide'


export default createRouteBundle({
  '/': Main,
  '/add': Add,
  '/substract': Substract,
  '/multiply': Multiply,
  '/divide': Divide
})