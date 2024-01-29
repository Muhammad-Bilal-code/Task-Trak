import React, { useContext, useState } from "react";
import Tag from "./Tag";
import { context } from "./context/Context";

const Form = () => {
  //   const [title, setTitle] = useState("");
  //   const handleChangeTitle = (e) => {
  //     // setTitle(e.target.value);
  //     // console.log(title);
  //     setTaskObj({
  //       title: e.target.value,
  //       status: status,
  //     });
  //   };
  //   console.log(title);

  //   const [status, setStatus] = useState("Todo");
  //   const handleChangeStatus = (e) => {
  //     // setStatus(e.target.value);
  //     // console.log(status);
  //     setTaskObj({
  //       title: title,
  //       //   title: e.target.value,
  //       status: e.target.value,
  //     });
  //   };
  //   console.log(status);
  const contextObj = useContext(context);
  console.log(contextObj);
  const { taskArr, setTaskArr } = contextObj;
  const [taskObj, setTaskObj] = useState({
    title: "",
    status: "Todo",
    tags: [],
  });

  const handleChangeInpt = (e) => {
    setTaskObj((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleTagSelect = (tagTitle) => {
    console.log(tagTitle);
    var checked = taskObj.tags.some((elm) => elm == tagTitle);
    // var checked = false;
    // for (let i = 0; i < taskObj.tags.length; i++) {
    //   if (taskObj.tags[i] === tagTitle) {
    //     console.log("if");
    //     checked = true;
    //     break;
    //   }
    // }
    console.log(checked);
    if (checked) {
      let filteredArr = taskObj.tags.filter((elm) => elm !== tagTitle);
      console.log(filteredArr);
      setTaskObj((prev) => {
        return { ...prev, tags: filteredArr };
      });
    } else {
      setTaskObj((prev) => {
        return { ...prev, tags: [...prev.tags, tagTitle] };
      });
    }
    // setTagsArr((prev) => [...prev, tagTitle]);
    // console.log(tagsArr);

    // console.log(taskObj);
  };
  //   console.log(tagsArr);
  console.log(taskObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTaskObj((prev) => {
    //   return { ...prev, tags: tagsArr };
    // });
    // handleChangeInpt(e);

    setTaskArr((prev) => [
      ...prev,
      { id: Math.random().toString(36).substr(2, 9), ...taskObj },
    ]);
    setTaskObj({ title: "", status: "Todo", tags: [] });
  };
  console.log(taskArr);

  const handleSelected = (val) => {
    let checked = false;
    for (let i = 0; i < taskObj.tags.length; i++) {
      if (taskObj.tags[i] === val) {
        // console.log("if");
        checked = true;
        break;
      }
    }
    return checked;
  };
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
        <div className="inpt">
          <input
            name="title"
            type="text"
            className="border"
            onChange={handleChangeInpt}
            value={taskObj.title}
          />
        </div>
        <div className="button flex justify-center gap-1">
          <Tag
            tagTitle={"Html"}
            handleTagSelect={handleTagSelect}
            selected={handleSelected("Html")}
          />
          <Tag
            tagTitle={"Css"}
            handleTagSelect={handleTagSelect}
            selected={handleSelected("Css")}
          />
          <Tag
            tagTitle={"Javascript"}
            handleTagSelect={handleTagSelect}
            selected={handleSelected("Javascript")}
          />
          <Tag
            tagTitle={"React"}
            handleTagSelect={handleTagSelect}
            selected={handleSelected("React")}
          />
          <select
            name="status"
            className="border-2 px-2 py-1 rounded"
            onChange={handleChangeInpt}
            value={taskObj.status}
          >
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
          <button type="submit" className="border-2 px-2 py-1 rounded">
            +Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
