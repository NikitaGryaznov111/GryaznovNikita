/**
 * Рендерит открывающееся меню с информацией о кандидате и кнопкой закрытия.
 *
 * Функция:
 * 1. Находит элемент с id "menu" в DOM.
 * 2. Если элемент найден, вставляет внутрь него разметку меню с логотипом,
 *    ФИО, описанием, телефоном и ссылкой на мессенджер.
 * 3. Добавляет обработчик клика на кнопку закрытия меню, который скрывает меню
 *    и снова отображает основной контент (container).
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './Menu.module.scss'
export default function renderMenu(): void {
  const menu = document.getElementById('menu')
  if (!menu) return
  menu.innerHTML = `   
  <div class="${styles.menuMain}">
    <div class="${styles.menuProfile}">
      <div class="${styles.menuHeader}">
        <img src="/logo.svg" alt="Logo" class="${styles.menuLogo}"> 
        <p>Задание выполнил</p>
      </div>
      <div class="${styles.menuText}">
        <h1 class="${styles.menuName}">Грязнов Никита Константинович</h1>
        <p class="${styles.menuDescription}">Самостоятельно обучаюсь фронтенд-разработке и программированию, имею огромное желание работать, развиваться и получать новые знания.</p>
        <p class="${styles.menuPhone}">+7 (952) 683-86-45</p>
      </div>
      <div class="${styles.menuFooter}">
        <a href="https://t.me/nikita_gryaznov13" class="${styles.menuLinkImg}"></a>
        <a href="https://t.me/nikita_gryaznov13" class="${styles.menuLinkText}">Ссылка на соцсеть/мессенджер</a>
      </div>
    </div>  
    <button id="menuBtnClose" class="${styles.menuBtnClose}"></button>
  </div>`

  const menuBtnClose = document.getElementById('menuBtnClose')
  const container = document.getElementById('container')
  if (container && menuBtnClose) {
    menuBtnClose.addEventListener('click', () => {
      container.style.display = 'block'
      menu.style.display = 'none'
    })
  }
}
