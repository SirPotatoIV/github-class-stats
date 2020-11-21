import React, { useEffect } from 'react';
import './App.css';
import { getRepositories } from './utils/github';
import { students } from './data/student-data';

function App() {
  useEffect(() => {
    getRepositories(students);
  }, []);
  // console.log(students[0]?.username);
  return (
    <div className="App">
      <h1>Class GitHub Summary</h1>
      {/* {getRepositories(students)} */}
    </div>
  );
}

export default App;
