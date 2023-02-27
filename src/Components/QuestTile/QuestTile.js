import React from "react"
import styles from "./questTile.module.css"
import { ReactComponent as Star } from "./star.svg"

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
                        <Star />
                    </div>
                </div>

                <div className={styles.tile_title}>
                    <p className={styles.tile_title_text}>{props.title}</p>
                </div>
                <div className={styles.tile_date}> {props.date}</div>
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