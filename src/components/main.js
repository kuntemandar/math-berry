import { h } from "preact";
import { connect } from "redux-bundler-preact";
import Add from "../../assets/add.jpg";
import Sub from "../../assets/sub.jpg";
import Multiply from "../../assets/multiply.jpg";
import Divide from "../../assets/divide.jpg";


export default connect(
  "doAdd",
  "doSubstract",
  "doMultiply",
  "doDivide",
  'doUpdateUrl',
  ({ doAdd, doSubstract, doMultiply, doDivide, doUpdateUrl }) => {
    return (
      <div class="tc">
        <header class="w-100 white f-subheadline tc pv5">Math Berry</header>
        <div class="dg gtc-half">
          <div class="w-75 f-headline tc pl5">
            <a onClick={doAdd}>
              <img class="br4" src={Add} alt="Add" />
            </a>
          </div>
          <div class="w-75 f-headline tc pl5"></div>
          <div class="w-75 f-headline tc pl5"></div>
          <div class="w-75 f-headline tc pl5">
            <a onClick={doSubstract}>
              <img class="br4" src={Sub} alt="Sub" />
            </a>
          </div>
          <div class="w-75 f-headline tc pl5">
            <a onClick={doMultiply}>
              <img class="br4" src={Multiply} alt="Multiply" />
            </a>
          </div>
          <div class="w-75 f-headline tc pl5"></div>
          <div class="w-75 f-headline tc pl5"></div>
          <div class="w-75 f-headline tc pl5">
            <a onClick={doDivide}>
              <img class="br4" src={Divide} alt="Divide" />
            </a>
          </div>
          <a class='tl' onClick={() => doUpdateUrl('/help')}>
              <i class="ma3 mt3 material-icons white f2">help</i>
            </a>
        </div>
      </div>
    );
  }
);
