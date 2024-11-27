import { useState } from "react"; // Import only what is needed
import "./App.css";
import Filter from "./components/Filter";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailsEdit from "./components/PersonalDetailsEdit";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [currentPage, setCurrentPage] = useState("login");
    const [tasks, setTasks] = useState({
        highPriority: ["Task 1"],
        mediumPriority: ["Task 2"],
        lowPriority: ["Task 3"],
        overdue: [],
    });
    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        email: "",
        phone: "",
        occupation: "",
    });

    const navigateTo = (page) => setCurrentPage(page);

    return (
        <div className="App">
            <header>
                <img src="/logo.png" alt="Task Manager Logo" className="app-logo" />
            </header>
            {currentPage === "login" && <Login navigateTo={navigateTo} />}
            {currentPage === "register" && <Register navigateTo={navigateTo} />}
            {currentPage === "tasks" && (
                <Filter tasks={tasks} setTasks={setTasks} navigateTo={navigateTo} />
            )}
            {currentPage === "personalDetails" && (
                <PersonalDetails
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                    navigateTo={navigateTo}
                />
            )}
            {currentPage === "personalDetailsEdit" && (
                <PersonalDetailsEdit
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                    navigateTo={navigateTo}
                />
            )}
            {currentPage === "settings" && <Settings navigateTo={navigateTo} />}
        </div>
    );
}

export default App;
