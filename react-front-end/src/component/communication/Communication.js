import React, { useState } from "react";
import "./Communication.css";

const Communication = () => {
	const [messages, setMessages] = useState([]);
	const [form, setForm] = useState({
		recipient: "All",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const sendMessage = (e) => {
		e.preventDefault();

		if (!form.subject || !form.message) {
			alert("Please fill all fields");
			return;
		}

		setMessages([
			...messages,
			{ ...form, date: new Date().toLocaleString() },
		]);

		setForm({ recipient: "All", subject: "", message: "" });
	};

	return (
		<div className="container mt-5">
			<h2 className="mb-4 text-center">✉️ Communication Center</h2>

			<form className="card p-4 mb-4" onSubmit={sendMessage}>
				<label className="form-label">Send To</label>
				<select
					className="form-select mb-3"
					name="recipient"
					value={form.recipient}
					onChange={handleChange}
				>
					<option>All</option>
					<option>Students</option>
					<option>Parents</option>
				</select>

				<input
					type="text"
					className="form-control mb-3"
					name="subject"
					placeholder="Subject"
					value={form.subject}
					onChange={handleChange}
				/>

				<textarea
					className="form-control mb-3"
					rows="4"
					name="message"
					placeholder="Write your message..."
					value={form.message}
					onChange={handleChange}
				></textarea>

				<button className="btn btn-primary">Send Message</button>
			</form>

			<h4>📬 Sent Messages</h4>
			{messages.length === 0 ? (
				<p>No messages sent yet</p>
			) : (
				<ul className="list-group">
					{messages.map((msg, index) => (
						<li key={index} className="list-group-item">
							<strong>{msg.subject}</strong>
							<p>{msg.message}</p>
							<small>
								To: {msg.recipient} | {msg.date}
							</small>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Communication;
