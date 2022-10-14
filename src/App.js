import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <div className="parent bg-github-darker-blue  h-screen">
      <Router>
        <div>
          <Navbar NavProp="bg-github-blue flex justify-center items-center space-x-4 h-12" />
        </div>
        <div className="justify-center flex items-center ">
          <AnimatedRoutes></AnimatedRoutes>
        </div>
      </Router>
    </div>
  );
}

export default App;
