import React, { useState } from 'react';
import './App.css';
// components
import StudentCard from './components/StudentCard/StudentCard';
import StudentSummary from './components/StudentSummary/StudentSummary';
// data and utils
import { students } from './data/student-data';
import { getProfile } from './utils/github';

function App() {
  // type will need to be correct once I have decided what data to keep from the response
  const [studentProfile, setStudentProfile] = useState<any>();

  // Function declared here so that response can be passed to other components
  const getStudent = async (username: string) => {
    console.log(username);
    const profile = await getProfile(username);
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
      {studentProfile && <StudentSummary studentProfile={studentProfile} />}
    </div>
  );
}

export default App;
