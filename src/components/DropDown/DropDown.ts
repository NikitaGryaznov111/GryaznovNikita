import styles from './DropDown.module.scss'
export default function renderDropDown(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return
  const dropDown = `
      <div id="dropDown">
        <h3 class="${styles.dropdownTitle}">Выпадающий список</h3>
        <p class="${styles.dropdownDescription}">Компонент состоит из текстового поля и выпадающей подсказки</p>
        <div class="${styles.dropdownGrid}">
          <div class="${styles.dropdownContainer}">
            <button class="${styles.dropdownBtnDefault}">Выберите что-нибудь</button>
            <span class="${styles.arrow}"></span>
          </div>
          <div class="${styles.dropdownContainer} ${styles.dropdownContainerHover}">
            <button class="${styles.dropdownBtnHover}">Выберите что-нибудь</button>
            <span class="${styles.arrow}"></span>
          </div>
          <div class="${styles.dropdownContainerList}">
            <p class="${styles.dropdownLabel}">Выберите что-нибудь</p>
            <div class="${styles.dropdownContainer}">    
              <button class="${styles.dropdownBtnSelect}">Выбранный пункт</button>
              <span class="${styles.arrow}"></span>
            </div>
            <ul class="${styles.dropdownList}">
              <li data-value="first-chair">Первый стул</li>
              <li data-value="second-chair">Второй стул</li>
              <li data-value="selected-item">Выбранный пункт</li>
              <li data-value="escobar-theorem">Теорема Эскобара</li>
            </ul>
          </div>
        </div>
       </div>
     </div>
  `

  uiSection.insertAdjacentHTML('beforeend', dropDown)
}
