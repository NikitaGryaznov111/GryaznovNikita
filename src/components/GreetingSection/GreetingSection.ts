/**
 * Рендерит приветственную секцию на главной странице.
 *
 * Функция:
 * 1. Находит элемент с id "main" в DOM.
 * 2. Если элемент найден, вставляет внутрь него HTML-разметку с заголовком,
 *    уровнем задания и описанием тестового задания.
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './GreetingSection.module.scss'

export default function renderGreetingSection(): void {
  const main = document.getElementById('main')
  if (!main) return
  main.innerHTML = `
      <section class="${styles.greeting}" id="greeting">
        <h1 class="${styles.greetingTitle}">Тестовое задание</h1>
        <p class="${styles.greetingLevel}">Уровень: junior</p>
        <p class="${styles.greetingDescription}">Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?</p>
      </section>
    `
}
