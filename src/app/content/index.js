'use client'

import styles from "./content.module.css"
import Sessions from "./sessions"
import Period from "./period"
import { useEffect, useState } from "react"

export default function Content() {
	const [newSession, setNewSession] = useState({
		tag: "",
		current: { start: "", end: "", duration: "" },
		periods: []
	})

	useEffect(() => {
		setNewSession({
			tag: "Задача",
			current: { start: "2022-07-17T10:35", end: "", duration: "" },
			periods:
			[
				{ start: "2022-07-16T10:25", end: "2022-07-16T10:35", duration: "00:10" },
			]
		})
	}, [])

	function handleClear() {
        setNewSession({
			...newSession,
			current: { start: "", end: "", duration: "" },
		})
    }

    // function handleChange(date, id, newValue) {
    //     const newSessions = currentSessions.map(
    //         session =>
    //         {
    //             if (session.sessionDate === date)
    //             {
    //                 session.tasks = [
    //                     ...session.tasks.slice(0, id),
    //                     newValue,
    //                     ...session.tasks.slice(id + 1)
    //                 ]
    //                 return session
    //             }
    //             else return session
    //         }
    //     )
    //     console.log(newSessions.find(e => e.sessionDate === date).tasks[id])
    //     setSessions(newSessions)        
    // }

	return (
		<main className={styles.content}>
			<form className={styles.new} onSubmit={e => e.preventDefault()}>
				<input className={styles.new__tag} defaultValue={newSession.tag} />
				<div className={styles.new__periods}>
					<div className={styles.new__period}>
						<label className={styles.new__time}>
							Начало
							<input type="datetime-local" defaultValue={newSession.current.start}
								onBlur={(e) => handleChange(session.sessionDate, i, {...task, tag: e.target.value})}
							/>
						</label>
						<label className={styles.new__time}>
							Оконачание
							<input type="datetime-local" defaultValue={newSession.current.end} />
						</label>
						<label className={styles.new__time}>
							Длительность
							<input type="time" defaultValue={newSession.current.duration} />
						</label>
						{
							!newSession.current.start 
							? <button className={[styles.new__button, styles.new__button_play].join(' ')}>Play</button>
							: <button className={[styles.new__button, styles.new__button_pause].join(' ')}>Pause</button>
						}
						<button className={[styles.new__button, styles.new__button_stop].join(' ')}>Stop</button>
						<button onClick={handleClear}>Clear</button>
					</div>
					{...newSession.periods.map(
						(period, i) =>
						<Period {...period} key={i} />
					)}
				</div>
			</form>
			<Sessions />
		</main>
	)
}
