import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import UsersPage from "./Pages/UsersPage";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
