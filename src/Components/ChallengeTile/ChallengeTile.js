import React from "react"
import styles from "./challengeTile.module.css"
import { ReactComponent as Cup } from "./cup.svg"

const QuestTile = (props) => {



    return (
        <>
            <div className={styles.tile}>
                <div className={styles.top_container}>
                    <div className={styles.difficulty}>
                        <span className={`${styles.dot} ${styles[props.difficultyLevel]}`}></span>
                        <p className={styles.difficulty_level} >{props.difficultyLevel.charAt(0).toUpperCase() + props.difficultyLevel.slice(1)}</p>
                    </div>
                    <div className={styles.picture}>
                        <Cup />
                    </div>
                </div>

                <p className={styles.tile_sign}>CHALLENGE</p>

                <div className={styles.tile_title}>
                    <p className={styles.tile_title_text}>{props.title}</p>
                </div>
                <div className={styles.tile_date}> by {props.date.slice(16, 21)}</div>
                <div className={styles.bottom_container}>
                    <div className={`${styles.category} ${styles[props.type]}`}>
                        <span className={styles.category_name}>{props.type.toUpperCase()} </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default QuestTile;