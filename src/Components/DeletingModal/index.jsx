import React from "react";
import styles from "./DeletingModal.module.css";

export const DeletingModal = (props) => {
  const { isOpen, handleClose, content, handleDelete } = props;

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <p className={styles.question}>{content}</p>
            <div className={styles.buttons}>
              <button onClick={handleClose} className={styles.modal__cancel}>
                CANCEL
              </button>
              <span>|</span>
              <button onClick={handleDelete} className={styles.modal__delete}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
