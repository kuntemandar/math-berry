import { h } from "preact";
import { connect } from "redux-bundler-preact";

export default connect(
  "selectOptions",
  "selectResult",
  ({ options, result }) => {
    const handleClick = (option) => {
        if(option === result) {
            alert('Success')
        }
    }
    return (
      options.length && (
        <div class="tc">
          <ul>
            {options.map((option) => (
              <li>
                <a onClick={() => handleClick(option)} class="f2 h4 w4">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
);
