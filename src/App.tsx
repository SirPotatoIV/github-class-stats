import React, { useEffect } from 'react';
import './App.css';
import { getRepositories, getProfile } from './utils/github';
import { students } from './data/student-data';
import StudentCard from './components/StudentCard/StudentCard';

function App() {
  useEffect(() => {
    // getRepositories(students[0]);
    // getProfile(students[0]);
  }, []);

  return (
    <div className="App">
      <h1>Class GitHub Summary</h1>
      <StudentCard />
    </div>
  );
}

export default App;
