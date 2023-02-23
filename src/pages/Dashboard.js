import React from "react"
import styles from "./dashboard.module.css"
import Tile from "../components/Tile"

const Dashboard = (props) => {

    const todayQuestsArray = [{
        hardness: "easy",
        title: "reQuest",
        date: Date.now(),
        type: "Health",
        isQuest: true
    },
    {
        hardness: "easy",
        title: "reQuest",
        date: Date.now(),
        type: "Health",
        isQuest: true
    }
    ]

    const tomorrowQuestsArray = [{
        hardness: "easy",
        title: "reQuest",
        date: Date.now(),
        type: "Health",
        isQuest: true
    },
    {
        hardness: "easy",
        title: "reQuest",
        date: Date.now(),
        type: "Health",
        isQuest: true
    }
    ]

    return (
        <>
            <div className={styles.main__container}>
                <div>
                    <p>Today</p>
                    <ul>
                        {todayQuestsArray.map(quest =>
                            <li>
                                <Tile
                                    difficultyLevel={quest.hardness}
                                    title={quest.title}
                                    date={quest.date}
                                    type={quest.type}
                                />
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <p>Tomorrow</p>
                    <ul>
                        {tomorrowQuestsArray.map(quest =>
                            <li>
                                <Tile
                                    difficultyLevel={quest.hardness}
                                    title={quest.title}
                                    date={quest.date}
                                    type={quest.type}
                                    isQuest={quest.isQuest}
                                />
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    )
};

export default Dashboard;