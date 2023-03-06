import React from "react";
import { ReactComponent as Clear } from "./clear.svg";
import css from "./CancelStart.module.css";

function CancelStart() {
  return (
    <div className={css.confirmation}>
      <Clear />
      <div class="seperator"></div>
      <button type="submit" className={css.confirm_btn}>
        START
      </button>
    </div>
  );
}

export default CancelStart;
