import React, { createContext, useEffect, useState } from "react";

export const context = createContext(null);
const Context = (props) => {
  const [taskArr, setTaskArr] = useState([]);

  // useEffect(() => {
  //   let localData = localStorage.getItem("data");
  //   localData = JSON.parse(localData);
  //   if (localData) {
  //     console.log("Local Data Present");
  //     console.log(localData);
  //     setTaskArr(localData);
  //     console.log(taskArr);
  //   }
  // }, []);
  useEffect(() => {
    console.log("Local Data Push");

    localStorage.setItem("data", JSON.stringify(taskArr));
  }, [taskArr]);
  return (
    <context.Provider value={{ taskArr, setTaskArr }}>
      {props.children}
    </context.Provider>
  );
};

export default Context;
