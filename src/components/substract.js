import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";

export default connect("selectOperands", ({ operands }) => {
  if (Array.isArray(operands)) {
    return <Fragment>
      <div class="dg gtc-half">
        <div class="w-50 vh-25 f-headline tc pl4"></div>
        <div class="w-50 vh-25 f-headline tc pl4">{operands[0]}</div>
        <div class="w-50 vh-25 f-headline tc pl4">
          {" "}
          <i class="material-icons f-headline">remove</i>
        </div>
        <div class="w-50 vh-25 f-headline tc pl4">{operands[1]}</div>
      </div>
      <div class="bar"></div>
    </Fragment>;
  }
});
