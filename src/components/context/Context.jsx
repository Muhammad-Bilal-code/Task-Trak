import React, { createContext, useEffect, useState } from "react";

export const context = createContext(null);
const Context = (props) => {
  let localData = localStorage.getItem("data");
  localData = JSON.parse(localData);
  console.log(localData);
  const [taskArr, setTaskArr] = useState(localData);
  // useEffect(() => {
  //   console.log("Local Data", typeof localData);
  //   console.log("Local Data", typeof localData);
  //   console.log("Local Data", localData);
  //   if (localData) {
  //     setTaskArr(localData);
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskArr));
  }, [taskArr]);
  return (
    <context.Provider value={{ taskArr, setTaskArr }}>
      {props.children}
    </context.Provider>
  );
};

export default Context;
