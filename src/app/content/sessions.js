'use client'

import Period from "./period"
import styles from "./content.module.css"
import { useEffect, useState } from "react"

export default function Sessions() {
    const [currentSessions, setSessions] = useState([])

    useEffect(() => {
        setSessions([
            {
                sessionDate: "2022-07-16",
                duration: "00:10",
                tasks:
                [
                    { tag: "#199", start: "2022-07-16T10:55", end: "2022-07-16T11:05", duration: "00:10" },
                    { tag: "#199", start: "2022-07-16T10:45", end: "2022-07-16T10:55", duration: "00:10" },
                    { tag: "#123", start: "2022-07-16T10:35", end: "2022-07-16T10:45", duration: "00:10" },
                    { tag: "#123", start: "2022-07-16T10:25", end: "2022-07-16T10:35", duration: "00:10" },
                ]
            },
            {
                sessionDate: "2022-07-15",
                duration: "00:10",
                tasks:
                [
                    { tag: "#333", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#333", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#199", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#199", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#255", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#255", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#123", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                    { tag: "#123", start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
                ]
            },
            // {
            // 	sessionDate: "2022-07-14",
            // 	duration: "00:10",
            // 	tasks:
            // 	[
            // 		{
            // 			tag: "#333",
            // 			periods:
            // 			[
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 			]
            // 		},
            // 		{
            // 			tag: "#199",
            // 			periods:
            // 			[
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 			]
            // 		},
            // 		{
            // 			tag: "#255",
            // 			periods:
            // 			[
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 			]
            // 		},
            // 		{
            // 			tag: "#123",
            // 			periods:
            // 			[
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 				{ start: "2022-07-16T10:25", end: "2022-07-16T10:25", duration: "00:10" },
            // 			]
            // 		}
            // 	]
            // },
        ])
    }, [])

    function handleDelete(date, id) {
        const newSessions = currentSessions.map(
            session =>
            {
                if (session.sessionDate === date)
                {
                    session.tasks = [
                        ...session.tasks.slice(0, id),
                        ...session.tasks.slice(id + 1)
                    ]
                    return session
                }
                else return session
            }
        )
        setSessions(newSessions.filter(
            session =>
            session.tasks.length != 0
        ))
    }

    function handleChange(date, id, newValue) {
        const newSessions = currentSessions.map(
            session =>
            {
                if (session.sessionDate === date)
                {
                    session.tasks = [
                        ...session.tasks.slice(0, id),
                        newValue,
                        ...session.tasks.slice(id + 1)
                    ]
                    return session
                }
                else return session
            }
        )
        console.log(newSessions.find(e => e.sessionDate === date).tasks[id])
        setSessions(newSessions)        
    }

	return (
		<section>
            {...currentSessions.map(
                session =>
                <div className={styles.session} key={session.sessionDate}>

                    <header>
                        <h2>{session.sessionDate}</h2><h2>{session.duration}</h2>
                    </header>
                        
                    <div className={styles.session__content}>
                        {...session.tasks.map(
                            (task, i) =>
                            <div className={styles.session__task} key={i}>

                                <input className={styles.session__task_tag} defaultValue={task.tag}
                                    onBlur={(e) => handleChange(session.sessionDate, i, {...task, tag: e.target.value})}
                                />
                                <div className={styles.session__task_periods}>
                                    <Period {...task} key={i} id={i}
                                        onDelete={() => handleDelete(session.sessionDate, i)}
                                        onChange={(newValue) => handleChange(session.sessionDate, i, {...task, ...newValue})}
                                    />
                                    {/* {...task.periods.map(
                                        (period, i) =>
                                        <Period {...period} key={i}  />
                                    )} */}
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            )}
        </section>
	)
}
