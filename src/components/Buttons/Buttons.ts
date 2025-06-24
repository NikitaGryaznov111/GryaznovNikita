/**
 * Рендерит секцию с кнопками на странице и добавляет обработчики событий для интерактивной кнопки.
 *
 * Функция:
 * 1. Находит элемент с id "ui" в DOM.
 * 2. Создаёт HTML-разметку с кнопками и добавляет её внутрь найденного элемента.
 * 3. Назначает обработчики событий нажатия и отпускания мыши на кнопку с id "button",
 *    изменяя при этом градиент фона при нажатии и восстанавливая его после отпускания.
 *
 * @returns {void} Ничего не возвращает.
 */

import styles from './Buttons.module.scss'
export default function renderButtons(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return

  const buttons = `
      <div class="${styles.buttons}">
        <h3 class="${styles.buttonsTitle}">Кнопка</h3>
        <div class="${styles.buttonsGrid}">
          <button class="${styles.buttonsItem} ${styles.buttonsItemInteractive}" id="button">Отправить</button>
          <button class="${styles.buttonsItem}">Отправить</button>
          <button class="${styles.buttonsItem}">Отправить</button>
          <button class="${styles.buttonsItem} disabled">Отправить</button>
        </div>
      </div>
      `
  uiSection.insertAdjacentHTML('beforeend', buttons)

  const button = document.getElementById('button')
  const pressedGradient =
    'linear-gradient(45deg, rgba(62, 41, 227, 1), rgba(222, 128, 237, 1))'

  if (button) {
    button.addEventListener('mousedown', () => {
      button.style.background = pressedGradient
    })
    button.addEventListener('mouseup', () => {
      button.style.background = ''
    })
  }
}
