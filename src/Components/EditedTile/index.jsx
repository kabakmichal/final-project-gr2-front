import React, { useState } from "react";

import { DetailsOfEditedTile } from "../DetailsOfEditedTile";

export const EditedTile = () => {
  const [hideComponent, setHideComponent] = useState(true);

  const hideTile = () => {
    setHideComponent(false);
    console.log("invisible component");
  };

  const resetHideComponent = () => {
    setHideComponent(true);
    console.log("visible component");
  };

  // componentWillUnmount = () => {
  //   resetHideComponent();
  // };

  return (
    <>
      {hideComponent && (
        <DetailsOfEditedTile onClick={hideTile} onHide={resetHideComponent} />
      )}
    </>
  );
};
