import { h } from "preact";
import { connect } from "redux-bundler-preact";

export default connect(
  "doUpdateUrl",
  "doAdd",
  "doSubstract",
  "doMultiply",
  "doDivide",
  ({ doUpdateUrl, doAdd, doSubstract, doMultiply, doDivide }) => {
    return (
      <div class="tc">
        <header class="w-100 white f-subheadline tc pv5">Math Funtastic</header>
        <ul>
          <li>
            <a onClick={doAdd}>
              {" "}
              <i class="material-icons">add</i>
            </a>
          </li>
          <li>
            <a onClick={doSubstract}>
              {" "}
              <i class="material-icons">remove</i>
            </a>
          </li>
          <li>
            <a onClick={doMultiply}>
              {" "}
              <i class="material-icons">clear</i>
            </a>
          </li>
          <li>
            <a onClick={doDivide}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRoge3YQQrCMBBG4afnaJfSu0vwBF6pi/YCdWHdKCUmMCbC+2BWCcn8i9AyIEmSQo1AAta9bsDUtKMKIzAD21vNwNCwr2KJzxCvujbsq9jKcZAl4sJzxKEZW8ShUUHulWvdmTh+7JeGfVUZeD7sZa/EH4aQpBinL/eFfI0LZPts8YsSwiCSpF451+qJc61azrUynGv1yLmWJEm/9gBe70qwvhn94gAAAABJRU5ErkJggg==" />{" "}
            </a>
          </li>
        </ul>{" "}
      </div>
    );
  }
);
