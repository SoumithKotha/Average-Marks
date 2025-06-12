import React from 'react';

const App = () => {
  const students = [
    { name: 'Alice', marks: [85, 78, 92] },
    { name: 'Bob', marks: [70, 88, 90] },
    { name: 'Charlie', marks: [60, 75, 65] },
    { name: 'David', marks: [95, 89, 93] },
    { name: 'Eve', marks: [80, 82, 88] },
  ];
  const getStats = (marks) => {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / marks.length;
    return { sum, average };
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Marks Summary</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Total</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => {
            const { sum, average } = getStats(student.marks);
            return (
              <tr key={idx}>
                <td>{student.name}</td>
                <td>{student.marks[0]}</td>
                <td>{student.marks[1]}</td>
                <td>{student.marks[2]}</td>
                <td>{sum}</td>
                <td>{average.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;