/**
 * Рендерит секцию с чекбоксами и радиокнопками на странице и добавляет обработчики событий
 * для интерактивных элементов.
 *
 * Функция:
 * 1. Находит элемент с id "ui" в DOM.
 * 2. Создаёт HTML-разметку с чекбоксами и радиобаттонами и добавляет её внутрь найденного элемента.
 * 3. Назначает обработчики кликов на элементы с id "checkboxInput" и "radioInput",
 *    переключая у них CSS-класс при нажатии (визуальная активация).
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './Checkbox.module.scss'
export default function renderCheckbox(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return

  const checkbox = `
      <div class="${styles.checkbox}">
        <h3 class="${styles.checkboxTitle}">Чекбокс, радиобаттон</h3>
          <div class="${styles.checkboxGrid}">
            <div class="${styles.leftGroup}">
              <div class="${styles.checkboxItem} ${styles.interactiveCheckboxItem}">
                <input type="checkbox">
                <span class="${styles.customCheckboxOne}" id="checkboxInput"></span>
                <span class="${styles.checkboxLabel}">Выбери меня</span>
              </div>
              <div class="${styles.checkboxItem}">
                <input type="checkbox" disabled>
                <span class="${styles.customCheckboxTwo}"></span>
                <span class="${styles.checkboxLabel}">Выбери меня</span>
              </div>
              <div class="${styles.checkboxItem}">
                <input type="checkbox" checked disabled>
                <span class="${styles.customCheckboxThree}"></span>
                <span class="${styles.checkboxLabel}">Птица счастья завтрашнего дня</span>
              </div>
            </div>
            <div class="${styles.rightGroup}">
              <div class="${styles.radioItem} ${styles.interactiveRadioItem}">
                <input type="radio">
                <span class="${styles.customRadioOne}" id="radioInput"></span>
                <span class="${styles.radioLabel}">Пластмассовый мир победил</span>
              </div>
              <div class="${styles.radioItem}">
                <input type="radio" disabled>
                <span class="${styles.customRadioTwo}"></span>
                <span class="${styles.radioLabel}">Выбери меня</span>
              </div>
              <div class="${styles.radioItem}">
                <input type="radio" checked>
                <span class="${styles.customRadioThree}"></span>
                <span class="${styles.radioLabel}">Птица счастья завтрашнего дня</span>
              </div>
            </div>
          </div>
      </div>
`
  uiSection.insertAdjacentHTML('beforeend', checkbox)
  const checkboxInput = document.getElementById('checkboxInput')
  const radioInput = document.getElementById('radioInput')

  if (checkboxInput && radioInput) {
    checkboxInput.addEventListener('click', () => {
      checkboxInput.classList.toggle(styles.markedCheckbox)
    })
    radioInput.addEventListener('click', () => {
      radioInput.classList.toggle(styles.markedRadio)
    })
  }
}
