import { Student } from '../data/student-data.example';
import axios from 'axios';

const githubUrl = 'https://api.github.com';

const getRepositories = async (student: Student[]) => {
  const response = await axios.get(`${githubUrl}/users/${student[0].username}/repos`);
  console.log(response);
  return '';
};

export { getRepositories };
