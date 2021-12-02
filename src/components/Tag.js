import { useState } from "react";

function Tag(props) {
  const [tag, setTag] = useState("");

  const changeTag = (e) => setTag(e.target.value);

  const addTag = (e) => {
    if (e.keyCode === 13 && tag !== "") {
      props.student.tags.push(tag); // not using setState so not triggering rerender, but this is the nice track for the filtering of tags
      setTag("");
    }
  };

  return (
    <input
      className="Tag"
      type="text"
      placeholder="Add a tag"
      value={tag}
      onChange={changeTag}
      onKeyUp={addTag}
    />
  );
}

export default Tag;
