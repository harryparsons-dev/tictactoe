import { useState } from "react";

import "./square.css";

function square({ value, onSquareClick }) {
  //const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default square;
