import React from "react";
import "./Reports.css";

const Reports = () => {
	// Dummy data (later connect to backend)
	const reportData = {
		totalStudents: 120,
		averageAttendance: "88%",
		averageGrade: "B+",
	};

	return (
		<div className="container mt-5">
			<h2 className="text-center mb-4">📈 Reports Dashboard</h2>

			{/* SUMMARY CARDS */}
			<div className="row text-center mb-4">
				<div className="col-md-4">
					<div className="report-card">
						<h4>Total Students</h4>
						<p>{reportData.totalStudents}</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="report-card">
						<h4>Average Attendance</h4>
						<p>{reportData.averageAttendance}</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="report-card">
						<h4>Average Grade</h4>
						<p>{reportData.averageGrade}</p>
					</div>
				</div>
			</div>

			{/* TABLE */}
			<div className="card p-3">
				<h4 className="mb-3">Student Performance Summary</h4>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Attendance %</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Rahul</td>
							<td>90%</td>
							<td>A</td>
						</tr>
						<tr>
							<td>Anita</td>
							<td>85%</td>
							<td>B+</td>
						</tr>
						<tr>
							<td>Vikram</td>
							<td>80%</td>
							<td>B</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Reports;
