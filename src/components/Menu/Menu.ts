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
        <h1 class="${styles.ModalName}">Грязнов Никита Константинович</h1>
        <p class="${styles.modalDescription}">Краткое описание. Например, студент 4 курса специальности «Прикладная информатика» в
          КузГТУ</p>
        <p class="${styles.modalPhone}">+7 (952) 683-86-45</p>
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
