import { useState } from "react";
import "./App.css";
import Tag from "./components/Tag";
import Form from "./components/Form";
import TaskCol from "./components/TaskCol";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <div className="conteiner mx-auto flex flex-col gap-4">
        <SignUp />
        <h2 className="text-3xl font-bold underline text-red-500">
          Welcome Task Trek
        </h2>
        <div className="head">
          <Form />
        </div>
        <div className="body flex justify-around">
          <TaskCol colHeading={"Todo"} />
          <TaskCol colHeading={"Doing"} />
          <TaskCol colHeading={"Done"} />
        </div>
      </div>
    </>
  );
}

export default App;
