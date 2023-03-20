import React, { useState } from "react";
import ConfirmedTile from "../ConfirmedTile/ConfirmedTile";
import { EditedTile } from "../EditedTile";

export const Tile = (props) => {
  const [edit, setEdit] = useState(false);

  const currentTile = JSON.parse(localStorage.getItem("currentToDo"));

  // console.log(currentTile);

  return !edit ? (
    <ConfirmedTile
      id={props.id}
      title={props.title}
      date={props.date}
      type={props.type}
      difficultyLevel={props.difficultyLevel}
      category={props.category}
      edit={edit}
      setEdit={setEdit}
    />
  ) : (
    <EditedTile
      id={currentTile.id}
      title={currentTile.title}
      date={currentTile.date}
      type={currentTile.type}
      difficultyLevel={currentTile.difficultyLevel}
      category={currentTile.category}
      // edit={edit}
      // setEdit={setEdit}
    />
  );
};
