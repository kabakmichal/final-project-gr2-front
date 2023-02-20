import React from "react"
import styles from "./tile.module.css"

const Tile = (props) => {

    const difficultyLevel = "tile_hard__9SxxV"

    return (
        <>
            <div className={styles.tile}>
                <div className={styles.first_row}>
                    <div className={styles.difficulty}>
                        <span className={`${styles.dot} ${difficultyLevel}`}></span>
                        <p className={styles.difficulty_level} >Hard</p>
                    </div>
                    <div className={styles.star}>Star</div>
                </div>
                <div className={styles.tile_title}>Name of Tiles</div>
                <div className={styles.tile_date}> 12/09/1996</div>
                <div className={styles.bottom_row}>
                    <span className={styles.category_name}>HEALTH </span>
                </div>

            </div>


        </>
    )
};

export default Tile;