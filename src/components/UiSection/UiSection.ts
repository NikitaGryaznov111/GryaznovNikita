/**
 * Рендерит секцию "UI" после блока типографики и вызывает рендеры отдельных компонентов.
 *
 * Функция:
 * 1. Находит элемент с id "typography" в DOM.
 * 2. Если элемент найден, вставляет после него разметку секции "UI".
 * 3. Вызывает функции рендера отдельных UI-компонентов:
 *    - Текстовое поле (`renderTextField`)
 *    - Выпадающий список (`renderDropDown`)
 *    - Кнопки (`renderButtons`)
 *    - Чекбоксы и радиокнопки (`renderCheckbox`)
 *    - Аккордеон (`renderAccordion`)
 *
 * @returns {void} Ничего не возвращает.
 */
import renderAccordion from '../Accordion/Accordion'
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
  renderTextField()
  renderDropDown()
  renderButtons()
  renderCheckbox()
  renderAccordion()
}
