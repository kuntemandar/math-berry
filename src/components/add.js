import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";
import Options from './options'

export default connect("selectOperands", "doAdd",  ({ operands, doAdd }) => {
  if (Array.isArray(operands)) {
    return <Fragment>
      <div class="dg gtc-half">
        <div class="w-50 vh-20 f-headline tc pl4"></div>
        <div class="w-50 vh-20 f-headline tc pl4">{operands[0]}</div>
        <div class="w-50 vh-20 f-headline tc pl4">
          {" "}
          <i class="material-icons f-headline">add</i>
        </div>
        <div class="w-50 vh-20 f-headline tc pl4">{operands[1]}</div>
      </div>
      <div class="bar"></div>
      <Options operation={doAdd} />
    </Fragment>;
  }
});
