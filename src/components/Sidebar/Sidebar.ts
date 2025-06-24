import styles from './Sidebar.module.scss'
export default function renderSidebar(): void {
  const sidebar = document.getElementById('sidebar')
  if (!sidebar) return
  sidebar.innerHTML = ` 
     <nav>
        <ul class="${styles.navList}">
          <li class="${styles.navItem}"><a href="#greeting" class="${styles.navLink}">Напутственное слово</a></li>
          <li class="${styles.navItem}"><a href="#grid" class="${styles.navLink}">Сетка</a></li>
          <li class="${styles.navItem}"><a href="#typography" class="${styles.navLink}">Типографика</a></li>
          <li class="${styles.navItem}"><a href="#ui" class="${styles.navLink}">UI</a></li>
        </ul>
     </nav>  
        `
  const navLinks = sidebar.querySelectorAll('a')
  const sections = document.querySelectorAll('section')
  let isProgrammaticScroll: boolean = false

  const handlerClick = (event: MouseEvent) => {
    event.preventDefault()
    isProgrammaticScroll = true
    const link = event.target as HTMLAnchorElement
    const href = link.getAttribute('href')
    if (!href) return
    const id = href.substring(1)
    const section = document.getElementById(id)
    if (!section) return
    const sectionTop = section.offsetTop - 20
    window.scrollTo({
      top: sectionTop,
    })

    navLinks.forEach((link) => {
      link.classList.remove(styles.activeLink)
    })
    link.classList.add(styles.activeLink)
    setTimeout(() => {
      isProgrammaticScroll = false
    }, 1000)
  }

  const handlerScroll = () => {
    if (isProgrammaticScroll) return
    const scrollPosition = window.scrollY
    sections.forEach((section) => {
      const sectionId = section.getAttribute('id')
      const sectionTop = section.offsetTop - 20
      if (scrollPosition >= sectionTop) {
        navLinks.forEach((link) => {
          link.classList.remove(styles.activeLink)
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add(styles.activeLink)
          }
        })
      }
    })
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', handlerClick)
  })
  window.addEventListener('scroll', handlerScroll)
}
