import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo_naver" className={styles.logo} /> for you
      </footer>
    </>
  )
}
