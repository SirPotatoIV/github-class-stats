import React from 'react';
import { Student } from '../../data/student-data.example';
import { getRepositories, getProfile } from '../../utils/github';

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <>
      Name: {student.name} GitHub Username: {student.username}
      <button onClick={() => getProfile(student)}>View Profile</button>
    </>
  );
}
