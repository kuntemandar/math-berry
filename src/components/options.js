import { h } from "preact";
import { connect } from "redux-bundler-preact";
import { useState } from "preact/hooks";
import cn from "classnames";
export default connect(
  "selectOptions",
  "selectResult",
  ({ options, result }) => {
    const [selected, setSelected] = useState([]);
    const [success, setSuccess] = useState(false);
    const handleClick = (option) => {
      setSelected((prevArray) => [...prevArray, option]);
      if (option === result) {
        setSuccess(true)
      }
    };
    return (
      options.length && (
        <div class="tc">
          {!success && (
            <ul>
              {options.map((option) => (
                <li>
                  <a
                    onClick={() => handleClick(option)}
                    class={cn("f2 h4 w4", {
                      selected: selected.includes(option),
                    })}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {success && (
            <svg id="successAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 70 70">
            <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
            <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>
            <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>
          </svg>
          )}
        </div>
      )
    );
  }
);
