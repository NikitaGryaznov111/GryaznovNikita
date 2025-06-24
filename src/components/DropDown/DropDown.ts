/**
 * Рендерит выпадающий список на странице и добавляет интерактивное поведение:
 * открытие/закрытие списка при клике, выбор элементов из списка,
 * закрытие при клике вне области.
 *
 * Функция:
 * 1. Находит элемент с id "ui" в DOM.
 * 2. Создаёт HTML-разметку выпадающего списка и добавляет её внутрь найденного элемента.
 * 3. Назначает обработчики событий:
 *    - Открытие/закрытие списка по клику на контейнер с кнопкой.
 *    - Выбор элемента из списка с обновлением текста кнопки и выделением активного пункта.
 *    - Закрытие списка при клике вне его области.
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './DropDown.module.scss'
export default function renderDropDown(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return
  const dropDown = `
      <div class="${styles.dropdown} id="dropDown">
        <h3 class="${styles.dropdownTitle}">Выпадающий список</h3>
        <p class="${styles.dropdownDescription}">Компонент состоит из текстового поля и выпадающей подсказки</p>
        <div class="${styles.dropdownGrid}">
          <div class="${styles.dropdownContainerList}">
            <p class="${styles.dropdownLabel}" id="dropdownLabel">Выберите что-нибудь</p>
            <div class="${styles.dropdownContainer} ${styles.dropdownContainerHover}" id="dropdownContainerBtn">    
              <button class="${styles.dropdownBtnSelect}" id="dropdownBtnSelect">Выбранный пункт</button>
              <span class="${styles.arrow}" id="arrow"></span>
            </div>
            <ul class="${styles.dropdownList}" id="dropdownList">
              <li data-value="first-chair">Первый стул</li>
              <li data-value="second-chair">Второй стул</li>
              <li data-value="selected-item">Выбранный пункт</li>
              <li data-value="escobar-theorem">Теорема Эскобара</li>
            </ul>
          </div>
          <div class="${styles.dropdownContainer} ${styles.dropdownContainerHoverDefault}">
            <button class="${styles.dropdownBtnHover}">Выберите что-нибудь</button>
            <span class="${styles.arrow}"></span>
          </div>
          <div class="${styles.dropdownContainerListDefault}">
            <p class="${styles.dropdownLabelDefault}">Выберите что-нибудь</p>
            <div class="${styles.dropdownContainer}">    
              <button>Выбранный пункт</button>
              <span class="${styles.arrow}"></span>
            </div>
            <ul class="${styles.dropdownListDefault}">
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

  const dropdownContainerBtn = document.getElementById('dropdownContainerBtn')
  const dropdownList = document.getElementById('dropdownList')
  const dropdownLabel = document.getElementById('dropdownLabel')
  const dropdownBtnSelect = document.getElementById('dropdownBtnSelect')
  const arrow = document.getElementById('arrow')

  if (
    dropdownList &&
    dropdownContainerBtn &&
    dropdownLabel &&
    dropdownBtnSelect &&
    arrow
  ) {
    const items = Array.from(dropdownList.querySelectorAll('li'))
    const handlerDropdownContainerBtn = (): void => {
      if (dropdownList.style.display === 'block') {
        dropdownList.style.display = 'none'
        dropdownLabel.style.display = 'none'
        arrow.style.transform = 'translateY(calc(-50% - 4px)) rotate(135deg)'
      } else {
        dropdownList.style.display = 'block'
        dropdownLabel.style.display = 'block'
        arrow.style.transform = 'translateY(-4px) rotate(315deg)'
      }
    }
    const handlerItem = (item: HTMLLIElement): void => {
      dropdownBtnSelect.textContent = item.textContent
      items.map((li) => li.classList.remove(styles.activeItem))
      item.classList.add(styles.activeItem)
    }
    items.map((item) => {
      item.addEventListener('click', () => handlerItem(item))
    })
    dropdownContainerBtn.addEventListener('click', handlerDropdownContainerBtn)
    document.addEventListener('click', (event) => {
      if (event.target instanceof Node) {
        if (
          !dropdownContainerBtn.contains(event.target) &&
          !dropdownList.contains(event.target)
        ) {
          dropdownList.style.display = 'none'
          dropdownLabel.style.display = 'none'
          arrow.style.transform = 'translateY(calc(-50% - 4px)) rotate(135deg)'
        }
      }
    })
  }
}
