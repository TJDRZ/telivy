import { useState } from "react";
import Expand from "./Expand";
import Tag from "./Tag";

function Students(props) {
  // State array and function for adding and removing students if their grades are open
  const [visibleGrades, setVisibleGrades] = useState([]);

  const gradeVisibility = (id) => {
    visibleGrades.includes(id)
      ? setVisibleGrades(visibleGrades.filter((grade) => grade !== id))
      : setVisibleGrades([...visibleGrades, id]);
  };

  return (
    <ul className="Students">
      {props.students.map((student) => {
        return (
          <li key={student.id} className="student">
            <div className="student-pic">
              <img src={student.pic} alt="" />
            </div>
            <div className="student-info">
              <h2>{student.name}</h2>
              <p>{student.email}</p>
              <p>{student.company}</p>
              <p>{student.skill}</p>
              <p>{student.average}</p>
              <ul
                className={`grades ${
                  visibleGrades.includes(student.id) ? "visible" : "hidden"
                }`}
              >
                {student.grades.map((grade, index) => {
                  return (
                    <li key={`${student.id}G${index}`} className="grade">
                      <p>{`Test ${index + 1}: `}</p>
                      <p>{`${grade}%`}</p>
                    </li>
                  );
                })}
              </ul>
              <ul className="tags-ul">
                {student.tags.map((tag, index) => {
                  return (
                    <li key={`${student.id}T${index}`} className="tag-li">
                      <div>{tag}</div>
                    </li>
                  );
                })}
              </ul>
              <Tag student={student} students={props.students} addTags={props.addTags} />
            </div>
            {/* Send id and func to add/rm from state arr onClick */}
            <Expand id={student.id} gradeVisibility={gradeVisibility} />
          </li>
        );
      })}
    </ul>
  );
}

export default Students;
