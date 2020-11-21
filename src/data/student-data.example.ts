// This is an example of how to format the student data to utilize this application
// Copy/paste this file in this directory and rename it student-data.ts
// .gitignore already includes this file to prevent student data from being published

type Student = {
  name: string;
  username: string;
};

const students: Student[] = [
  {
    name: 'John Smith',
    username: 'johnSmith1',
  },
  {
    name: 'Jane Doe',
    username: 'janeDoe1',
  },
];

export { students };
