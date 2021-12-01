// import uniqid from "unqid";
import Expand from "./Expand";

function Students(props) {
  return (
    <ul className="Students">
      {props.students.map((student, index) => {
        return (
          <li key={index} className="student">
            <div className="student-pic">
              <img src={student.pic} alt="" />
            </div>
            <div className="student-info">
              <h2>{student.name}</h2>
              <p>{student.email}</p>
              <p>{student.company}</p>
              <p>{student.skill}</p>
              <p>{student.average}</p>
              <ul className="grades">
                {student.grades.map((grade, index) => {
                  return (
                    <li key={index} className="grade">
                      <p>{`Test ${index + 1}: `}</p>
                      <p>{`${grade}%`}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Expand />
          </li>
        );
      })}
    </ul>
  );
}

export default Students;
