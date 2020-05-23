import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";
import cn from 'classnames'
const Layout = ({
  route,
  routeInfo,
  doUpdateUrlToHome,
  isOnHome,
  isOnHelp,
}) => {
  const Page = route;
  const colorMap = {
    "/add": "indianred",
    "/substract": "lightblue",
    "/multiply": "lightyellow",
    "/divide": "lightgreen",
  };
  const backgroundColor = {
    backgroundColor: colorMap[routeInfo.url],
    backgroundSize: "cover",
    height: '100vh'
  };

  const html = (
    <div>
      {isOnHome ? (
        <div>
          <Page />
        </div>
      ) : (
        <div style={backgroundColor}>
          <a class={cn({white: isOnHelp})} onClick={() => doUpdateUrlToHome()}>
            <i class="ma3 material-icons f2 lightyellow">home</i>
          </a>
          <Page />
        </div>
      )}
    </div>
  );
  return html;
};
export default connect(
  "selectRoute",
  "selectRouteInfo",
  "doUpdateUrlToHome",
  "selectIsOnHelp",
  "selectIsOnHome",
  Layout
);
