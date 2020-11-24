import React, { useState } from 'react';
import './App.css';

// components
import StudentCard from './components/StudentCard/StudentCard';

// data and utils
import { Student, students } from './data/student-data';
import { getRepositories, getProfile } from './utils/github';

function App() {
  const [studentProfile, setStudentProfile] = useState({});

  // Function declared here so that response can be passed to other components
  const getStudent = (username: string): void => {
    const profile = getProfile(username);
    setStudentProfile(profile);
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
