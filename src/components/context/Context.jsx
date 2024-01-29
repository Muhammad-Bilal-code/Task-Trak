import React, { createContext, useState } from "react";

export const context = createContext([]);
const Context = (props) => {
  const [taskArr, setTaskArr] = useState([]);
  return (
    <context.Provider value={{ taskArr, setTaskArr }}>
      {props.children}
    </context.Provider>
  );
};

export default Context;
