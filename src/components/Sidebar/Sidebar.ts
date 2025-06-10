import styles from './Sidebar.module.scss'
export default function renderSidebar(): void {
  const sidebar = document.getElementById('sidebar')
  if (!sidebar) return
  sidebar.innerHTML = ` 
     <nav>
        <ul class="${styles.navList}">
          <li class="${styles.navItem}"><a href="#greeting">Напутственное слово</a></li>
          <li class="${styles.navItem}"><a href="#grid">Сетка</a></li>
          <li class="${styles.navItem}"><a href="#typography">Типографика</a></li>
          <li class="${styles.navItem}"><a href="#ui">UI</a></li>
        </ul>
     </nav>  
        `
}
