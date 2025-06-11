import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "x-api-key": "reqres-free-v1",
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await res.json();
      if (res.ok && email == "eve.holt@reqres.in" && password == "cityslicka") {
        localStorage.setItem("token", data.token);
      } else {
        localStorage.clear();
      }

      if (localStorage.getItem("token")) {
        navigate("/profile");
      } else {
        alert("Incorrect Email or Password");
      }
    } catch (error) {
      console.log("error occured: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-xl shadow-lg transform transition-all">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <Lock size={28} className="text-white" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">
            Welcome
          </h2>
          <p className="mt-2 text-xl font-medium text-gray-600">
            Sign in to your account
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Mail size={20} />
              </div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-900"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Lock size={20} />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border-0 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-900"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 rounded-lg shadow-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-200 text-lg font-medium"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
