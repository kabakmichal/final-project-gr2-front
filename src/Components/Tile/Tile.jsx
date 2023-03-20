import React, { useState } from "react";
import ConfirmedTile from "../ConfirmedTile/ConfirmedTile";
import { EditedTile } from "../EditedTile";

export const Tile = (props) => {
  const [edit, setEdit] = useState(false);

  const test = {
    title: "title",
    category: "learning",
    data: "today",
  };

  const saveCurrentToDo = () => {
    const testLocal = JSON.stringify(test);
    localStorage.setItem("currentToDo", testLocal);
  };

  const handleEdit = () => {
    setEdit();
    // saveCurrentToDo();
  };

  return !edit ? (
    <ConfirmedTile
      id={props.id}
      title={props.title}
      date={props.date}
      type={props.type}
      difficultyLevel={props.difficultyLevel}
      category={props.category}
      edit={edit}
      // setEdit={handleEdit}
      setEdit={setEdit}
    />
  ) : (
    <EditedTile
      id={props.id}
      title={props.title}
      date={props.date}
      type={props.type}
      difficultyLevel={props.difficultyLevel}
      category={props.category}
      edit={edit}
      setEdit={setEdit}
    />
  );
};
