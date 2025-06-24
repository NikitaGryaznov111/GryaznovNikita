/**
 * Рендерит шапку страницы с логотипом, ФИО и бургер-меню.
 *
 * Функция:
 * 1. Находит элемент с id "header" и вставляет внутрь него разметку шапки.
 * 2. Если найдены элементы "burger", "container" и "menu", добавляет обработчик клика на бургер,
 *    который скрывает контент и показывает меню.
 * 3. Определяет приватную функцию `alignElementsHorizontally`, которая вычисляет ширину скролла
 *    и корректно позиционирует кнопку закрытия меню по правому краю.
 * 4. Подписывается на события `load`, `resize` и `scroll` для динамической корректировки позиции.
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './Header.module.scss'
export default function renderHeader(): void {
  const header = document.getElementById('header')
  const menu = document.getElementById('menu')

  if (!header) return
  header.innerHTML = ` 
     <div class="${styles.header}">
      <div class="${styles.logoContainer}">
       <img src="/logo.svg" alt="Logo" class="${styles.logo}"> 
       <div class="${styles.user}">
        <p class="${styles.surname}">Грязнов</p>
        <p class="${styles.name}">Никита Константинович</p>
       </div>
      </div>
        <button type="button" class="${styles.burger}" id="burger">
         <span class="${styles.burgerTop}"></span>
         <span class="${styles.burgerBottom}"></span>
        </button>
     </div>`

  const container = document.getElementById('container')
  const burger = document.getElementById('burger')
  if (container && burger && menu) {
    burger.addEventListener('click', () => {
      container.style.display = 'none'
      menu.style.display = 'block'
    })
  }

  function alignElementsHorizontally(): void {
    const menuBtnClose = document.getElementById('menuBtnClose')
    const clientWidth = document.documentElement.clientWidth
    const scrollWidth = window.innerWidth - clientWidth

    if (!burger || !menuBtnClose) return

    menuBtnClose.style.right = `${64 + scrollWidth}px`
    if (window.innerWidth < 768) {
      menuBtnClose.style.right = `${32 + scrollWidth}px`
    }
  }
  window.addEventListener('load', alignElementsHorizontally)
  window.addEventListener('resize', alignElementsHorizontally)
  window.addEventListener('scroll', alignElementsHorizontally)
}
