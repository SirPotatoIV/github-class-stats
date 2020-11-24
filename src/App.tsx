import React, { useState } from 'react';
import './App.css';
import { Student, students } from './data/student-data';
import { getRepositories, getProfile } from './utils/github';
import StudentCard from './components/StudentCard/StudentCard';

function App() {
  const [student, setStudent] = useState({});

  const getStudent = (username: string): void => {
    const studentProfile = getProfile(username);
    setStudent(studentProfile);
  };

  return (
    <div className="App">
      <h1>Class GitHub Summary</h1>
      {students.map((student) => (
        <div key={student.username} className="card">
          <StudentCard student={student} getStudent={getStudent} />
        </div>
      ))}
    </div>
  );
}

export default App;
