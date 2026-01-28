import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="home-bg">
			{/* HERO CARD */}
			<div className="glass-card">
				<h1>Student Management System</h1>
				<p>
					A smart platform to manage students, attendance, performance,
					and communication — all in one place.
				</p>
				{/* <button onClick={() => navigate("/view-students")}>
					View Students
				</button> */}
			</div>

			{/* FEATURES */}
			<div className="features-wrapper">
				<div className="feature" onClick={() => navigate("/view-students")}>
					<h3>📋 Student Records</h3>
					<p>View, add, update, and delete student information</p>
				</div>

				<div className="feature" onClick={() => navigate("/attendance")}>
	<h3>📊 Attendance & Grades</h3>
	<p>Monitor academic performance and attendance</p>
</div>


				<div
	className="feature"
	onClick={() => navigate("/reports")}
>
	<h3>📈 Reports</h3>
	<p>Generate insights with reports and analytics</p>
</div>


				<div
	className="feature"
	onClick={() => navigate("/communication")}
>
	<h3>✉️ Communication</h3>
	<p>Connect with students and parents easily</p>
</div>

			</div>
		</div>
	);
};

export default Home;
