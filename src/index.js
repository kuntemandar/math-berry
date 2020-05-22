import "./style";
import "./tachyons";
import { Component, Fragment } from "preact";
import { Provider } from "redux-bundler-preact";
import { IS_BROWSER } from "redux-bundler";
import createStore from "./bundles";
import Layout from './components/layout'
 
const store = IS_BROWSER && createStore(window.BOOTSTRAP_DATA);
if (IS_BROWSER) {
  window.store = store;
}
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Layout />
      </Provider>
      
    );
  }
}
