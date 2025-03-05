import { useState, useEffect } from 'react';

const getRandomScore = () => Math.floor(Math.random() * 100);
const getRandomStatus = () => (Math.random() > 0.5 ? 'Active' : 'Inactive');

const initialStudents = [
  { id: 1, name: 'John Doe', rollno: '101', status: getRandomStatus(), risk: getRandomScore() },
  { id: 2, name: 'Jane Smith', rollno: '102', status: getRandomStatus(), risk: getRandomScore() },
  { id: 3, name: 'Alice Johnson', rollno: '103', status: getRandomStatus(), risk: getRandomScore() },
  { id: 4, name: 'Bob Williams', rollno: '104', status: getRandomStatus(), risk: getRandomScore() },
];

const StudentDashboard = () => {
  const [students, setStudents] = useState(initialStudents);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents((prev) =>
        prev.map((student) => ({
          ...student,
          status: getRandomStatus(),
          risk: getRandomScore(),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Status</th>
            <th>Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.status}</td>
              <td>{student.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
