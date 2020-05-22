import { composeBundles } from 'redux-bundler'
import routes from './routes'
import main from './main'
export default composeBundles(
  routes,
  main
)