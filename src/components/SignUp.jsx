import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";

const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        alert("Succes");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <label htmlFor="">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border-2 border-black ms-3 p-1"
      />
      <label htmlFor="" className="ms-3">
        Password
      </label>
      <input
        type="email"
        placeholder="Enter Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="border-2 border-black ms-3 p-1"
      />
      <button
        type="button"
        onClick={handleSignUp}
        className="ms-3 border-2 border-blue-400 p-1"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
