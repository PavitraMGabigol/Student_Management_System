import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container-fluid px-4">
				{/* BRAND */}
				<Link className="navbar-brand fw-bold" to="/">
					Student Management System
				</Link>

				{/* TOGGLER */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* NAV LINKS */}
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/view-students">
								View Students
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/add-students">
								Add Students
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
