import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="https://cdn.discordapp.com/attachments/1030350459950600222/1077913389122203689/download.png" className={styles.logo} /> for you
      </footer>
    </>
  )
}
