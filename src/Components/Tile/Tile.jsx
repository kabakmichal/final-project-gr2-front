import React, { useState } from "react";
import ConfirmedTile from "../ConfirmedTile/ConfirmedTile";
import { EditedTile } from "../EditedTile";

export const Tile = (props) => {
  const [edit, setEdit] = useState(false);

  const editTrue = () => setEdit(true);
  const editFalse = () => setEdit(false);

  const currentTile = JSON.parse(localStorage.getItem("currentToDo"));

  // console.log(props);

  return !edit ? (
    <ConfirmedTile
      id={props.id}
      title={props.title}
      date={props.date}
      type={props.type}
      difficultyLevel={props.difficultyLevel}
      category={props.category}
      edit={edit}
      setEdit={editTrue}
    />
  ) : (
    <EditedTile
      id={currentTile._id}
      title={currentTile.title}
      date={currentTile.date}
      time={currentTile.time}
      status={currentTile.status}
      type={currentTile.type}
      difficultyLevel={currentTile.difficultyLevel}
      category={currentTile.category}
      // edit={edit}
      // setEdit={setEdit}
    />
  );
};
