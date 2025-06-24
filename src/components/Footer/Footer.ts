/**
 * Рендерит футер страницы с простым содержимым.
 *
 * Функция:
 * 1. Находит элемент с id "footer" в DOM.
 * 2. Если элемент найден, вставляет внутрь него HTML-разметку с текстом и смайликом.
 *
 * @returns {void} Ничего не возвращает.
 */
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
