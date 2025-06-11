import "./App.css";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
