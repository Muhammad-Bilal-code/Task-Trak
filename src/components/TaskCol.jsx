import React, { useContext } from "react";
import TaskSection from "./TaskSection";
import { context } from "./context/Context";

const TaskCol = (props) => {
  //   console.log(props);
  const { colHeading } = props;
  const contextObj = useContext(context);
  //   console.log(contextObj);
  const { taskArr, setTaskArr } = contextObj;
  return (
    <div>
      <h2 className="text-4xl">{colHeading}</h2>
      <br />
      {taskArr
        .filter((elm) => elm.status === colHeading)
        .map((elm) => (
          <TaskSection
            key={elm.id}
            id={elm.id}
            taskTitle={elm.title}
            tags={elm.tags}
          />
        ))}
    </div>
  );
};

export default TaskCol;
