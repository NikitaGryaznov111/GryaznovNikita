import styles from './UiSection.module.scss'
export default function renderUiSection(): void {
  const typography = document.getElementById('typography')
  if (!typography) return
  const uiSection = `
      <section class="${styles.ui}">
        <h2 class="${styles.uiTitle}">UI</h2>
        <h3 class="${styles.uiSubtitle}">Текстовое поле</h3>
        <div class="${styles.uiInputs}">
          <div class="${styles.uiInputContainer}">
            <input type="text"  placeholder="E-mail">
          </div>

          <div class="${styles.uiInputContainer}">
            <p class="${styles.hoverText}">Ховер</p>
            <input class="${styles.hoverState}" type="text" id="email-hover" placeholder="E-mail">
          </div>

          <div class="${styles.uiInputContainer}">
            <p class="${styles.inputText}">Ввод</p>
            <p class="${styles.inputTextEmail}">E-mail</p>
            <input class="${styles.inputState}" type="text" id="email-input" placeholder="office@make.st">
          </div>

          <div class="${styles.uiInputContainer}">
            <p class="${styles.errorText}">Ошибка</p>
            <p>E-mail</p>
            <input class="${styles.errorState}" type="text" id="email-error" placeholder="officemake.st">
            <p class="${styles.uiInputErrorMessage}">Текст ошибки</p>
          </div>
        </div>
      </section>
    `
  typography.insertAdjacentHTML('afterend', uiSection)
}
