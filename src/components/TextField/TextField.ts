/**
 * Рендерит секцию с текстовыми полями, включая поле ввода email с валидацией.
 *
 * Функция:
 * 1. Находит элемент с id "ui" в DOM.
 * 2. Если элемент найден, вставляет внутрь него разметку с различными состояниями текстовых полей.
 * 3. Добавляет обработчик ввода для поля "E-mail", который:
 *    - Проверяет корректность email с помощью функции `isValidEmail`.
 *    - Применяет стили ошибки при неверном формате.
 *    - Скрывает/показывает подсказки и метки в зависимости от состояния ввода.
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './TextField.module.scss'
import { isValidEmail } from './TextField.helpers'
export default function renderTextField(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return
  const textField = `
    <div class="${styles.textField}">
     <h3 class="${styles.textFieldTitle}">Текстовое поле</h3>
        <div class="${styles.textFieldGrid}">
          <div class="${styles.textFieldItem}">
            <p class="${styles.textEmail}" id="textEmail">E-mail</p>
            <input type="text"  placeholder="E-mail" id="interactiveInput" class="${styles.interactiveInput}">
            <p class="${styles.errorMessage}" id="errorMessage">Текст ошибки</p>
          </div>

          <div class="${styles.textFieldItem}">
            <input class="${styles.hoverState}" type="text" placeholder="E-mail">
          </div>

          <div class="${styles.textFieldItem}" >
            <p class="${styles.textEmailDefault}">E-mail</p>
            <input class="${styles.inputState}" type="text" placeholder="office@make.st">
          </div>

          <div class="${styles.textFieldItem}" >
            <p class="${styles.errorTextEmail}">E-mail</p>
            <input class="${styles.errorState}" type="text" id="errorState" placeholder="officemake.st">
            <p class="${styles.errorMessageDefault}">Текст ошибки</p>
          </div>
        </div>
    </div>
    `
  uiSection.insertAdjacentHTML('beforeend', textField)

  const input = document.getElementById('interactiveInput') as HTMLInputElement
  const textEmail = document.getElementById('textEmail')
  const errorMessage = document.getElementById('errorMessage')

  function handlerInput(): void {
    const value = input.value.trim()

    if (value !== '' && !isValidEmail(value)) {
      input.classList.remove(styles.inputState)
      input.classList.add(styles.errorState)
      textEmail!.style.color = '#e80f3b'
      textEmail!.style.opacity = '1'
      errorMessage!.style.display = 'block'
    } else {
      input.classList.add(styles.inputState)
      input.classList.remove(styles.errorState)
      textEmail!.style.color = '#7d7d7d'
      textEmail!.style.opacity = '1'
      errorMessage!.style.display = 'none'
    }
    if (value === '') {
      textEmail!.style.opacity = '0'
      input.classList.remove(styles.inputState)
    }
  }
  input.removeEventListener('input', handlerInput)
  input.addEventListener('input', handlerInput)
}
