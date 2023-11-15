import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || email === "" || password === "") return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
      setLoading(false);
      const user = auth.currentUser;
      navigate(`/${user!.uid}`);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/5 bg-white rounded-xl shadow-md px-10 py-8">
        <form onSubmit={onSubmit} className="flex flex-col space-y-3">
          <input
            placeholder="Email"
            value={email}
            onChange={onChange}
            type="email"
            name="email"
            className="border-2 border-gray-400 px-2 py-1 rounded-md outline-none"
          />
          <input
            placeholder="Password"
            value={password}
            onChange={onChange}
            type="password"
            name="password"
            className="border-2 border-gray-400 px-2 py-1 rounded-md outline-none"
          />
          <input
            type="submit"
            value={loading ? "Loading..." : "로그인"}
            className="bg-[#393E5A] text-white py-2 rounded-lg font-medium"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
