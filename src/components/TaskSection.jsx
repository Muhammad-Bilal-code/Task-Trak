import React, { useContext } from "react";
import Tag from "./Tag";
import { context } from "./context/Context";

const TaskSection = ({ taskTitle, tags, id }) => {
  const { taskArr, setTaskArr } = useContext(context);
  const handleDeletTask = (id) => {
    let newArr = taskArr.filter((elm) => elm.id !== id);
    setTaskArr(newArr);
  };
  return (
    <div className="task-sec border-2 border-black p-2 m-2" id={id}>
      <div className="task-upper flex justify-between">
        <h2 className="text-xl">{taskTitle}</h2>
        <img
          src="./assets/delete.png"
          alt=""
          width="30px"
          onClick={() => handleDeletTask(id)}
          id={id}
          className="cursor-pointer"
        />
      </div>
      <br />
      <div className="task-lower">
        {tags.map((elm, i) => (
          <Tag tagTitle={elm} selected key={i} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
