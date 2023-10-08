'use client'

import styles from "./content.module.css"

export default function Period({ start, end, duration, onDelete, onChange }) {
    function handleChange(newValue) {
        onChange(newValue)
    }

    return (
        <div className={styles.period}>
            <input type="datetime-local" defaultValue={start}
                onBlur={(e) => handleChange({start: e.target.value})}
            />
            <input type="datetime-local" defaultValue={end}
                onBlur={(e) => handleChange({end: e.target.value})}
            />
            <input type="time" defaultValue={duration}  readOnly/>
            <button className={styles.period__delete} onClick={onDelete}>Delete</button>
        </div>
    )
}
