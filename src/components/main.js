import { h } from "preact";
import { connect } from "redux-bundler-preact";
import posed from "react-pose";

const Circle = posed.li({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.7 }
});

export default connect(
  "doAdd",
  "doSubstract",
  "doMultiply",
  "doDivide",
  ({ doAdd, doSubstract, doMultiply, doDivide }) => {
    return (
      <div class="tc">
        <header class="w-100 white f-subheadline tc pv5">Math Berry</header>
        <ul>
          <Circle>
            <a onClick={doAdd}>
              {" "}
              <i class="material-icons">add</i>
            </a>
          </Circle>
          <Circle>
            <a onClick={doSubstract}>
              {" "}
              <i class="material-icons">remove</i>
            </a>
          </Circle>
          <Circle>
            <a onClick={doMultiply}>
              {" "}
              <i class="material-icons">clear</i>
            </a>
          </Circle>
          <Circle>
            <a onClick={doDivide}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRoge3YQQrCMBBG4afnaJfSu0vwBF6pi/YCdWHdKCUmMCbC+2BWCcn8i9AyIEmSQo1AAta9bsDUtKMKIzAD21vNwNCwr2KJzxCvujbsq9jKcZAl4sJzxKEZW8ShUUHulWvdmTh+7JeGfVUZeD7sZa/EH4aQpBinL/eFfI0LZPts8YsSwiCSpF451+qJc61azrUynGv1yLmWJEm/9gBe70qwvhn94gAAAABJRU5ErkJggg==" />{" "}
            </a>
          </Circle>
        </ul>{" "}
      </div>
    );
  }
);
