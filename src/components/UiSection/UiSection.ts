import styles from './UiSection.module.scss'
export default function renderUiSection(): void {
  const typography = document.getElementById('typography')
  if (!typography) return
  const uiSection = `
      <section class="${styles.ui}" id="ui">
        <h2 class="${styles.uiTitle}">UI</h2>
        <h3 class="${styles.uiSubtitle}">Текстовое поле</h3>
        <div class="${styles.uiInputs}">
          <div class="${styles.uiInputContainer}">
            <input type="text"  placeholder="E-mail">
          </div>

          <div class="${styles.uiInputContainer}">
            <p class="${styles.hoverText}" >Ховер</p>
            <input class="${styles.hoverState}"  type="text" placeholder="E-mail">
          </div>

          <div class="${styles.uiInputContainer}" >
            <p class="${styles.inputText}" id="inputText">Ввод</p>
            <p class="${styles.inputTextEmail}" id="inputTextEmail">E-mail</p>
            <input  type="text" id="inputState" placeholder="office@make.st">
          </div>

          <div class="${styles.uiInputContainer}" >
            <p class="${styles.errorText}" id="errorText">Ошибка</p>
            <p class="${styles.errorTextEmail}" id="errorTextEmail">E-mail</p>
            <input type="text" id="errorState" placeholder="officemake.st">
            <p class="${styles.errorMessage}" id="errorMessage">Текст ошибки</p>
          </div>
        </div>
      </section>
    `
  typography.insertAdjacentHTML('afterend', uiSection)

  // Добавление стилей при вводе данных
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
  inputState?.addEventListener('input', updateInputState)

  // Добавление стилей при ошибке
  const errorState = document.getElementById('errorState') as HTMLInputElement
  const errorText = document.getElementById('errorText')
  const errorTextEmail = document.getElementById('errorTextEmail')
  const errorMessage = document.getElementById('errorMessage')

  function isValidEmail(email: string): boolean {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(String(email).toLocaleLowerCase())
  } //проверка валидности email

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
  errorState?.addEventListener('input', errorInputState)
}
