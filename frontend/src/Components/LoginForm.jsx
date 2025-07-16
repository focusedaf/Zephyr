import React, { useState } from "react";
import { Square, CheckSquare } from "lucide-react";
import axios from "axios";

const LoginForm = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pw, showPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  function validatePwd(password) {
    if (password.length >= 8) {
      return "Password needs to be at least 8 characters";
    }
    if (!/[a-z]/.test(password)) {
      return "Password needs at least one lowercase letter";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password needs at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password needs at least one number";
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      return "Password needs at least one special character";
    }
    return null;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setMsg("");
    setLoading(true);

    if (!email || !pwd) {
      console.log("Credentials are required");
      setLoading(false);
      return;
    }

    const checkPwd = validatePwd(pwd);
    if (checkPwd) {
      setErrorMsg(checkPwd);
      console.log(checkPwd);
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Invalid email format");
      console.log("Invalid email format");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        { email, pwd },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setMsg("Logged in successfully");
      setLoading(false);
      return;
    } catch (error) {
      console.error("Error logging in", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex ${className}`}>
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-sm text-gray-400">
          Don't have an account? <span className="text-blue-600">Signup</span>
        </p>

        <form
          className="flex flex-col gap-5 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 border-b border-gray-400 outline-none w-full"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="password" className="text-gray-400">
              Password
            </label>
            <input
              type={pw ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="border-0 border-b border-gray-400 outline-none w-full"
              required
            />
          </div>

          <button
            type="button"
            onClick={() => showPw(!pw)}
            className="flex gap-2 items-center text-sm text-gray-600"
          >
            {pw ? (
              <CheckSquare className="text-gray-400" />
            ) : (
              <Square className="text-gray-400" />
            )}
            <span>Show Password</span>
          </button>

          <button
            type="submit"
            disabled={loading}
            className="bg-black rounded-md p-2 text-white hover:bg-gray-900 transition"
          >
            {loading ? "Processing..." : "Login"}
          </button>
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          {msg && <p className="text-green-500 text-sm">{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
