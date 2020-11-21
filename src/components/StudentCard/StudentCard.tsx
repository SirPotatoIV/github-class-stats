import React from 'react';
import { Student } from '../../data/student-data.example';

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <>
      Name: {student.name} GitHub Username: {student.username}
    </>
  );
}
