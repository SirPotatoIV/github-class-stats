import { Student } from '../data/student-data.example';
import axios from 'axios';

const githubUrl = 'https://api.github.com';

const getRepositories = async (student: Student) => {
  const response = await axios.get(`${githubUrl}/users/${student.username}/repos`);
  console.log(response);
  return response;
};

const getProfile = async (student: string) => {
  const { data } = await axios.get(`${githubUrl}/users/${student}`);
  console.log(data);
  return data;
};

export { getRepositories, getProfile };
