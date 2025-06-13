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

  // Функция для расположения кнопки закрытия меню с учетом ширины вертикального скролла
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
