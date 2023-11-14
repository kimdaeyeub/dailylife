import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
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
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/");
    }
  };
  const logOut = async () => {
    await auth.signOut();
  };
  return (
    <>
      <div className="bg-red-400 w-full h-screen">
        <button onClick={logOut}>Log out</button>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={onChange}
            type="email"
            name="email"
          />
          <input
            placeholder="Password"
            value={password}
            onChange={onChange}
            type="password"
            name="password"
          />
          <input type="submit" value={loading ? "Loading..." : "Submit"} />
        </form>
      </div>
    </>
  );
};

export default Login;
