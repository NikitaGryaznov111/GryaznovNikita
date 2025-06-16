import styles from './TextField.module.scss'
import { isValidEmail } from './TextField.helpers'
export default function renderTextField(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return
  const textField = `
    <div id="textField">
     <h3 class="${styles.textFieldTitle}">Текстовое поле</h3>
        <div class="${styles.textFieldGrid}">
          <div class="${styles.textFieldItem}">
            <input type="text"  placeholder="E-mail">
          </div>

          <div class="${styles.textFieldItem}">
            <p class="${styles.hoverText}" >Ховер</p>
            <input class="${styles.hoverState}"  type="text" placeholder="E-mail">
          </div>

          <div class="${styles.textFieldItem}" >
            <p class="${styles.inputText}" id="inputText">Ввод</p>
            <p class="${styles.inputTextEmail}" id="inputTextEmail">E-mail</p>
            <input type="text" id="inputState" placeholder="office@make.st">
          </div>

          <div class="${styles.textFieldItem}" >
            <p class="${styles.errorText}" id="errorText">Ошибка</p>
            <p class="${styles.errorTextEmail}" id="errorTextEmail">E-mail</p>
            <input type="text" id="errorState" placeholder="officemake.st">
            <p class="${styles.errorMessage}" id="errorMessage">Текст ошибки</p>
          </div>
        </div>
    </div>
    `
  uiSection.insertAdjacentHTML('beforeend', textField)
  //Обработка при вводе данных в инпут
  const inputState = document.getElementById('inputState') as HTMLInputElement
  const inputText = document.getElementById('inputText')
  const inputTextEmail = document.getElementById('inputTextEmail')

  function updateInputState(): void {
    const value = inputState.value.trim()

    if (value !== '') {
      inputState.classList.add(styles.inputState)
      inputText!.style.opacity = '1'
      inputTextEmail!.style.opacity = '1'
    } else {
      inputState.classList.remove(styles.inputState)
      inputText!.style.opacity = '0'
      inputTextEmail!.style.opacity = '0'
    }
  }
  inputState.removeEventListener('input', updateInputState)
  inputState.addEventListener('input', updateInputState)

  // Обработка ошибки при вводе данных в инпут
  const errorState = document.getElementById('errorState') as HTMLInputElement
  const errorText = document.getElementById('errorText')
  const errorTextEmail = document.getElementById('errorTextEmail')
  const errorMessage = document.getElementById('errorMessage')

  function errorInputState(): void {
    const value = errorState.value.trim()
    if (value !== '' && !isValidEmail(value)) {
      errorState.classList.add(styles.errorState)
      errorText!.style.opacity = '1'
      errorTextEmail!.style.opacity = '1'
      errorMessage!.style.display = 'block'
    } else {
      errorState.classList.remove(styles.errorState)
      errorText!.style.opacity = '0'
      errorTextEmail!.style.opacity = '0'
      errorMessage!.style.display = 'none'
    }
  }
  errorState.removeEventListener('input', errorInputState)
  errorState.addEventListener('input', errorInputState)
}
