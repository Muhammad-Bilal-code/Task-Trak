import React, { useContext } from "react";
import TaskSection from "./TaskSection";
import { context } from "./context/Context";

const TaskCol = (props) => {
  //   console.log(props);
  const { colHeading } = props;
  const contextObj = useContext(context);
  //   console.log(contextObj);
  const { taskArr, setTaskArr } = contextObj;
  console.log(taskArr);
  //   let filteredArr = taskArr.filter((elm) => elm.status == -colHeading);
  return (
    <div>
      <h2 className="text-4xl">{colHeading}</h2>
      <br />
      {taskArr.map(
        (elm) =>
          elm.status === colHeading && (
            <TaskSection
              key={elm.id}
              id={elm.id}
              taskTitle={elm.title}
              tags={elm.tags}
            />
          )
      )}
      {/* {taskArr.filter((elm) => elm.status === colHeading).length > 0
        ? taskArr
            .filter((elm) => elm.status === colHeading)
            .map((elm) => (
              <TaskSection
                key={elm.id}
                id={elm.id}
                taskTitle={elm.title}
                tags={elm.tags}
              />
            ))
        : "No Data"} */}

      {/* {taskArr.length > 0
        ? taskArr
            .filter((elm) => elm.status === colHeading)
            .map((elm) => (
              <TaskSection
                key={elm.id}
                id={elm.id}
                taskTitle={elm.title}
                tags={elm.tags}
              />
            ))
        : "No Data"} */}
      {/* {filteredArr.length > 0
        ? filteredArr.map((elm) => (
            <TaskSection
              key={elm.id}
              id={elm.id}
              taskTitle={elm.title}
              tags={elm.tags}
            />
          ))
        : "No Data"} */}
    </div>
  );
};

export default TaskCol;
