import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";

const Layout = ({ route, routeInfo, doUpdateUrl }) => {
  const Page = route;
  return (
    <Fragment>
      { routeInfo.url != '/' && <a onClick={() => doUpdateUrl('/')}>
        <i class="ma3 material-icons lightyellow">home</i>
      </a>}
      <Page />
      
    </Fragment>
  );
};
export default connect("selectRoute", 'selectRouteInfo', 'doUpdateUrl', Layout);
