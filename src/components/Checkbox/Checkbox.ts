import styles from './Checkbox.module.scss'
export default function renderCheckbox(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return

  const checkbox = `
      <div class="${styles.checkbox}">
        <h3 class="${styles.checkboxTitle}">Чекбокс, радиобаттон</h3>
          <div class="${styles.checkboxGrid}">
            <div class="${styles.leftGroup}">
              <div class="${styles.checkboxItem}">
                <input type="checkbox" id="checkboxInput">
                <span class="${styles.customCheckboxOne}"></span>
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
              <div class="${styles.radioItem}">
                <input type="radio" id="radioInput">
                <span class="${styles.radioLabel}">Пластмассовый мир победил</span>
              </div>
              <div class="${styles.radioItem}">
                <input type="radio" disabled>
                <span class="${styles.radioLabel}">Выбери меня</span>
              </div>
              <div class="${styles.radioItem}">
                <input type="radio" checked>
                <span class="${styles.radioLabel}">Птица счастья завтрашнего дня</span>
              </div>
            </div>
          </div>
      </div>
`

  uiSection.insertAdjacentHTML('beforeend', checkbox)
}
