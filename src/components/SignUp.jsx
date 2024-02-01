import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";

const auth = getAuth(app);
const SignUp = () => {
  //   const [email, setEmail] = useState("");
  //   console.log(email);
  //   const [password, setPassword] = useState("");
  //   console.log(password);
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(signUpVal);
    const { email, password } = signUpVal;
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        alert("Succes");
        setSignUpVal({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const [signUpVal, setSignUpVal] = useState({ email: "", password: "" });
  const handleChangeSignUp = (e) => {
    console.log(e.target.name, e.target.value);
    setSignUpVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(signUpVal);
  return (
    <div className="border-2 border-black p-4">
      <h2 className="text-4xl mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          required
          // onChange={(e) => setEmail(e.target.value)}
          onChange={(e) => handleChangeSignUp(e)}
          value={signUpVal.email}
          className="border border-black ms-3 p-1 rounded"
          name="email"
        />
        <label htmlFor="" className="ms-3">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          required
          //   onChange={(e) => setPassword(e.target.value)}
          value={signUpVal.password}
          className="border border-black ms-3 p-1 rounded"
          name="password"
          onChange={(e) => handleChangeSignUp(e)}
        />
        <button
          type="submit"
          className="ms-3 border-2 border-blue-400 p-1 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
