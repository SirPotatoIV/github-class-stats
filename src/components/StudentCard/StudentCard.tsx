import React from 'react';
import { Student } from '../../data/student-data.example';

type StudentCardProps = {
  student: Student;
  getStudent: (username: string) => void;
};

export default function StudentCard({ student, getStudent }: StudentCardProps) {
  return (
    <>
      Name: {student.name} GitHub Username: {student.username}
      <button onClick={() => getStudent(student.username)}>View Profile</button>
    </>
  );
}
