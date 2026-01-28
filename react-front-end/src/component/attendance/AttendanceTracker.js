import React, { useState, useEffect } from "react";
import "./AttendanceTracker.css";

const AttendanceTracker = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newStudent, setNewStudent] = useState({ name: "", attendance: 0, grade: "A" });

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // Update existing student
  const updateStudent = (id, key, value) => {
    const numericValue = key === "attendance" ? Number(value) : value; // convert attendance to number
    setStudents(students.map(s => (s.id === id ? { ...s, [key]: numericValue } : s)));

    const student = students.find(s => s.id === id);
    fetch(`http://localhost:8080/students/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...student, [key]: numericValue })
    }).catch(err => console.error(err));
  };

  // Add new student
  const handleAddStudent = () => {
    if (!newStudent.name.trim()) {
      alert("Name is required!");
      return;
    }

    // Ensure attendance is number
    const studentToAdd = { ...newStudent, attendance: Number(newStudent.attendance) };

    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentToAdd)
    })
      .then(res => res.json())
      .then(student => {
        // Make sure backend returns "id" in response
        setStudents([...students, student]);
        setNewStudent({ name: "", attendance: 0, grade: "A" }); // reset input
      })
      .catch(err => console.error(err));
  };

  // Delete student
  const deleteStudent = (id) => {
    fetch(`http://localhost:8080/students/delete/${id}`, { method: "DELETE" })
      .then(() => setStudents(students.filter(s => s.id !== id)))
      .catch(err => console.error(err));
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="attendance-page">
      <h1>📊 Attendance & Grade Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance (%)</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Existing students */}
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>

              <td>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={student.attendance}
                  onChange={e => updateStudent(student.id, "attendance", e.target.value)}
                />
              </td>

              <td>
                <select
                  value={student.grade}
                  onChange={e => updateStudent(student.id, "grade", e.target.value)}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </td>

              <td>
                <button onClick={() => deleteStudent(student.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}

          {/* Row to add new student */}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter name"
                value={newStudent.name}
                onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="number"
                min={0}
                max={100}
                value={newStudent.attendance}
                onChange={e =>
                  setNewStudent({ ...newStudent, attendance: Number(e.target.value) })
                }
              />
            </td>
            <td>
              <select
                value={newStudent.grade}
                onChange={e => setNewStudent({ ...newStudent, grade: e.target.value })}
              >
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </td>
            <td>
              <button onClick={handleAddStudent}>➕ Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracker;
