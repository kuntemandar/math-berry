import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";
import Options from './options'

export default connect("selectOperands", "doDivide", ({ operands, doDivide }) => {
  if (Array.isArray(operands)) {
    return <Fragment>
      <div class="dg gtc-half">
        <div class="w-50 vh-20 f-headline tc pl4"></div>
        <div class="w-50 vh-20 f-headline tc pl4">{operands[0]}</div>
        <div class="w-50 vh-20 f-headline tc pl4">
          {" "}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRoge3YQQrCMBBG4afnaJfSu0vwBF6pi/YCdWHdKCUmMCbC+2BWCcn8i9AyIEmSQo1AAta9bsDUtKMKIzAD21vNwNCwr2KJzxCvujbsq9jKcZAl4sJzxKEZW8ShUUHulWvdmTh+7JeGfVUZeD7sZa/EH4aQpBinL/eFfI0LZPts8YsSwiCSpF451+qJc61azrUynGv1yLmWJEm/9gBe70qwvhn94gAAAABJRU5ErkJggg==" />{" "}
        </div>
        <div class="w-50 vh-20 f-headline tc pl4">{operands[1]}</div>
      </div>
      <div class="bar"></div>
      <Options operation={doDivide}/>
    </Fragment>;
  }
});
