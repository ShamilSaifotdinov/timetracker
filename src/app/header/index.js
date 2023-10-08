import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>timetracker</h2>
      <div className={styles.header__login}>
        <span>e-mail@mail.com</span>
        <button>exit</button>
      </div>
    </header>
  )
}
