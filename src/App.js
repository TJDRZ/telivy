import "./styles/App.css";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import Filter from "./components/Filter";
import axios from "axios";
import uniqid from "uniqid";

function App() {
  const [students, setStudents] = useState([]); // Holds originals
  const [filteredName, setFilteredName] = useState("");
  const [filteredTag, setFilteredTag] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]); // What we use

  // On mount, fetch api and then use create students
  useEffect(() => {
    // Grab only data we need, put into obj, add to students state array
    const createStudent = (student) => {
      const studentObj = {
        id: uniqid(),
        pic: `${student.pic}`,
        name: `${student.firstName} ${student.lastName}`,
        email: `Email: ${student.email}`,
        company: `Company: ${student.company}`,
        skill: `Skill: ${student.skill}`,
        average: `Average: ${getAvg(student.grades)}%`,
        grades: student.grades,
        tags: [],
      };
      setStudents((students) => [...students, studentObj]);
    };

    // Math to get average from array of grades
    const getAvg = (grades) => {
      let sum = 0;
      grades.forEach((grade) => (sum += parseInt(grade)));
      return sum / grades.length;
    };

    // API call
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((res) =>
        res.data.students.forEach((student) => {
          createStudent(student);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  // Filters (case insensitive)
  useEffect(() => {
    if (filteredName !== "" && filteredTag !== "") {
      setFilteredStudents(
        students.filter((student) => {
          return (
            student.name.toLowerCase().includes(filteredName.toLowerCase()) &&
            student.tags.find((tag) => tag.includes(filteredTag))
          );
        })
      );
    } else if (filteredName !== "") {
      setFilteredStudents(
        students.filter((student) =>
          student.name.toLowerCase().includes(filteredName.toLowerCase())
        )
      );
    } else if (filteredTag !== "") {
      setFilteredStudents(
        students.filter((student) =>
          student.tags.find((tag) => tag.includes(filteredTag))
        )
      );
    } else {
      setFilteredStudents(students);
    }
  }, [students, filteredName, filteredTag]);

  return (
    <main className="App">
      <Filter setFilteredText={setFilteredName} placeholder={"name"} />
      <Filter setFilteredText={setFilteredTag} placeholder={"tag"} />
      <Students students={filteredStudents} addTags={setFilteredStudents} />
    </main>
  );
}

export default App;
