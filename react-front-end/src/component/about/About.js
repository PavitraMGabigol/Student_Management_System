import React from "react";
import "./About.css"; // Make sure this CSS file is imported

const About = () => {
  return (
    <div className="about-container">
      <div className="overlay">
        <p>
          The Student Management System (SMS) is designed to streamline and automate the management of student records. 
          With this system, institutions can efficiently handle student enrollment, attendance tracking, grade management, 
          report generation, and internal communication between students, teachers, and administrators.
        </p>

        <h3>Features:</h3>
        <ul>
          <li>Manage student profiles and academic records</li>
          <li>Track attendance and performance</li>
          <li>Generate report cards and performance summaries</li>
          <li>Facilitate communication between teachers and students</li>
        </ul>

        <h3>Contact Us</h3>
        <p>Email: support@sms.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Education Lane, Bangalore, India</p>
      </div>
    </div>
  );
};

export default About;
