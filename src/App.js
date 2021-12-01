import "./styles/App.css";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import Filter from "./components/Filter";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredText, setFilteredText] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  // On mount, fetch api and then use create students
  useEffect(() => {
    // Grab only data we need, put into obj, add to students state array
    const createStudent = (student) => {
      const studentObj = {
        pic: `${student.pic}`,
        name: `${student.firstName} ${student.lastName}`,
        email: `Email: ${student.email}`,
        company: `Company: ${student.company}`,
        skill: `Skill: ${student.skill}`,
        average: `Average: ${getAvg(student.grades)}%`,
        grades: student.grades
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

  // Filter (case insensitive)
  useEffect(() => {
    setFilteredStudents(
      students.filter((student) =>
        student.name.toLowerCase().includes(filteredText.toLowerCase())
      )
    );
  }, [students, filteredText]);

  return (
    <main className="App">
      <Filter setFilteredText={setFilteredText} />
      <Students students={students} filteredStudents={filteredStudents} />
    </main>
  );
}

export default App;
