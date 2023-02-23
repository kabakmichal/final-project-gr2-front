import React from "react"
import styles from "./tile.module.css"

const Tile = (props) => {

    const difficultyLevel = "tile_hard__9SxxV"

    console.log(props)

    return (
        <>
            <div className={styles.tile}>
                <div className={styles.first_row}>
                    <div className={styles.difficulty}>
                        <span className={`${styles.dot} ${props.difficultyLevel}`}></span>
                        <p className={styles.difficulty_level} >{props.difficultyLevel}</p>
                    </div>
                    <div className={styles.star}>Star</div>
                </div>
                <div className={styles.tile_title}>{props.title}</div>
                <div className={styles.tile_date}> {props.date}</div>
                <div className={styles.bottom_row}>
                    <span className={styles.category_name}>{props.type} </span>
                </div>

            </div>


        </>
    )
};

export default Tile;