import { useState } from "react";

function Expand() {
  const [showGrades, setShowGrades] = useState("hidden");

  const plusMinus = () => {
    showGrades === "hidden"
      ? setShowGrades("visible")
      : setShowGrades("hidden");
  };

  return (
    <button onClick={plusMinus} className="expand">
      {showGrades === "hidden" ? <p>+</p> : <p>-</p>}
    </button>
  );
}

export default Expand;
