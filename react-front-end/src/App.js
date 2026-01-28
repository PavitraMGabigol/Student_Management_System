import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Reports from "./component/reports/Reports";
import About from "./component/about/About";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import AttendanceTracker from "./component/attendance/AttendanceTracker";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentPofile";
import Communication from "./component/communication/Communication";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/view-students" element={<StudentsView />} />

				<Route path="/add-students" element={<AddStudent />} />

				<Route path="/edit-student/:id" element={<EditStudent />} />

				<Route path="/student-profile/:id" element={<StudentPofile />} />

				<Route path="/attendance" element={<AttendanceTracker />} />
                
				<Route path="/communication" element={<Communication />} />
                
				<Route path ='/about' element = {<About/>}></Route>
				<Route path="/reports" element={<Reports />} />
				
	
			</Routes>
		</Router>
	);
}

export default App;
