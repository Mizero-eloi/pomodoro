import React from "react";

function Button({ title, activeclassName, _callbackfn }) {
  return (
    <button onClick={_callbackfn} className={activeclassName}>
      {title}
    </button>
  );
}

export default Button;
