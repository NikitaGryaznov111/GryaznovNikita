import renderButtons from '../Buttons/Buttons'
import renderCheckbox from '../Checkbox/Checkbox'
import renderDropDown from '../DropDown/DropDown'
import renderTextField from '../TextField/TextField'
import styles from './UiSection.module.scss'
export default function renderUiSection(): void {
  const typography = document.getElementById('typography')
  if (!typography) return

  const uiSection = `
      <section class="${styles.ui}" id="ui">
        <h2 class="${styles.uiTitle}">UI</h2> 
      </section>`
  typography.insertAdjacentHTML('afterend', uiSection)
  // Рендерю блоки UI секции:
  renderTextField()
  renderDropDown()
  renderButtons()
  renderCheckbox()
}
