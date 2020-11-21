import React from 'react';
import './App.css';
import { students } from './data/student-data';
import StudentCard from './components/StudentCard/StudentCard';

function App() {
  return (
    <div className="App">
      <h1>Class GitHub Summary</h1>
      {students.map((student) => (
        <div key={student.username} className="card">
          <StudentCard student={student} />
        </div>
      ))}
    </div>
  );
}

export default App;
