import { useState } from "react";

function Expand(props) {
  const { id, gradeVisibility } = props;
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    gradeVisibility(id);
  };

  return (
    <button className="Expand" onClick={openClose}>
      {isOpen === false ? <p>+</p> : <p>-</p>}
    </button>
  );
}

export default Expand;
