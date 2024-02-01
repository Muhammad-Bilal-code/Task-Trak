import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";

const auth = getAuth(app);
const SignIn = () => {
  //   const [email, setEmail] = useState("");
  //   console.log(email);
  //   const [password, setPassword] = useState("");
  //   console.log(password);
  const [signInVal, setSignInVal] = useState({ email: "", password: "" });
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(signInVal);
    const { email, password } = signInVal;
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        alert("Sign In Success");
        setSignInVal({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };
  const handleChangeSignIn = (e) => {
    console.log(e.target.name, e.target.value);
    setSignInVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(signInVal);
  return (
    <div className="border-2 border-black p-4">
      <h2 className="text-3xl font-bold underline text-red-500 mb-4">
        Sign In
      </h2>
      <form onSubmit={handleSignIn}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          required
          // onChange={(e) => setEmail(e.target.value)}
          onChange={(e) => handleChangeSignIn(e)}
          value={signInVal.email}
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
          value={signInVal.password}
          className="border border-black ms-3 p-1 rounded"
          name="password"
          onChange={(e) => handleChangeSignIn(e)}
        />
        <button
          type="submit"
          className="ms-3 border-2 border-blue-400 p-1 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
