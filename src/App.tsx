import React, { useEffect } from 'react';
import './App.css';
import { getRepositories, getProfile } from './utils/github';
import { students } from './data/student-data';

function App() {
  useEffect(() => {
    // getRepositories(students[0]);
    getProfile(students[0]);
  }, []);
  // console.log(students[0]?.username);
  return (
    <div className="App">
      <h1>Class GitHub Summary</h1>
    </div>
  );
}

export default App;
