import styles from './Footer.module.scss'
export default function renderFooter(): void {
  const footer = document.getElementById('footer')
  if (!footer) return
  footer.innerHTML = `
      <div class="${styles.footer}">
        <p>Победа!</p>
        <p>😜</p>
      </div>
  `
}
