import { useState } from "react";

function Tag(props) {
  const { student, students, addTags } = props;
  const [tag, setTag] = useState("");

  const changeTag = (e) => setTag(e.target.value);

  const addTag = (e) => {
    if (e.keyCode === 13 && tag !== "") {
      // keyCode 13 = "Enter"
      students.forEach((person) => {
        if (person.id === student.id) {
          person.tags.push(tag);
        }
      });
      addTags([...students]);
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
