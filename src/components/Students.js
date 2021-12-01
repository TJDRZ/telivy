// import uniqid from "unqid";

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
            </div>
            <ul className="grades">
              {props.students.map((student, index) => {
                return (
                  <li key={index} className="grade">
                    {`Test ${index + 1}:`}
                    {student.grades} {/* Gotta make this a percent, blah blah */}
                  </li>
                )
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default Students;
