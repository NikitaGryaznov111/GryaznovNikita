import styles from './TypographySection.module.scss'
export default function renderTypographySection(): void {
  const grid = document.getElementById('grid')
  if (!grid) return
  const typographySection = `
      <section class="${styles.typography}" id="typography">
        <h2 class="${styles.typographyTitle}">Типографика</h2>
        <p class="${styles.typographyDescription}">Используется шрифт Graphik. На телефонах стили типографики переопределяются</p>
        <div class="${styles.typographyButtons}">
          <button class="${styles.btnDesctop} ${styles.activeBtn}" id="btnDesctop">Десктоп</button>
          <button class="${styles.btnMobile}" id="btnMobile">Телефон</button>
        </div>
        <div class="${styles.column} ${styles.desktopColumn}" id="desktopColumn">
          <div class="${styles.row} ${styles.rowH1Desk}">
            <p>Заголовок H1, 48/56, bold</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH2Desk}">
            <p>Заголовок H2, 32/40, bold</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH3Desk}">
            <p>Заголовок H3, 24/32, medium</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH4Desk}">
            <p>Заголовок H4, 18/28, medium</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowLeadDesk}">
            <p>Лид P_Lead, 24/32, regular</p>
            <p>Текст лида</p>
          </div>
          <div class="${styles.row} ${styles.rowLargeTextDesk}">
            <p>Крупный текст P_18, 18/28, regular</p>
            <p>Крупный текст</p>
          </div>
          <div class="${styles.row} ${styles.rowMainTextDesk}">
            <p>Основной текст P_16, 16/24, regular</p>
            <p>Основной текст</p>
          </div>
          <div class="${styles.row} ${styles.rowSecondaryTextDesk}">
            <p>Впомогательный текст P_14, 14/20, regular</p>
            <p>Вспомогательный текст</p>
          </div>
        </div>

        <div class="${styles.column} ${styles.mobileColumn}" id="mobileColumn">
          <div class="${styles.row} ${styles.rowH1Mob}">
            <p>Заголовок H1, 32/40, bold</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH2Mob}">
            <p>Заголовок H2, 28/36, bold</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH3Mob}">
            <p>Заголовок H3, 20/28, medium</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowH4Mob}">
            <p>Заголовок H4, 18/28, medium</p>
            <p>Текст заголовка</p>
          </div>
          <div class="${styles.row} ${styles.rowLeadMob}">
            <p>Лид P_Lead, 20/28, regular</p>
            <p>Текст лида</p>
          </div>
          <div class="${styles.row} ${styles.rowLargeTextMob}">
            <p>Крупный текст P_18, 18/28, regular</p>
            <p>Крупный текст</p>
          </div>
          <div class="${styles.row} ${styles.rowMainTextMob}">
            <p>Основной текст P_16, 16/24, regular</p>
            <p>Основной текст</p>
          </div>
          <div class="${styles.row} ${styles.rowSecondaryTextMob}">
            <p>Впомогательный текст P_14, 14/20, regular</p>
            <p>Вспомогательный текст</p>
          </div>
        </div>
      </section>
    `
  grid.insertAdjacentHTML('afterend', typographySection)

  const btnDesctop = document.getElementById('btnDesctop')
  const btnMobile = document.getElementById('btnMobile')
  const desktopColumn = document.getElementById('desktopColumn')
  const mobileColumn = document.getElementById('mobileColumn')

  const activateButton = (button: Element): void => {
    button.classList.add(styles.activeBtn)
  }
  const deactivateButton = (button: Element): void => {
    button.classList.remove(styles.activeBtn)
  }

  if (btnMobile && btnDesctop && desktopColumn && mobileColumn) {
    btnMobile.addEventListener('click', () => {
      deactivateButton(btnDesctop)
      activateButton(btnMobile)
      desktopColumn.style.display = 'none'
      mobileColumn.style.display = 'block'
    })
    btnDesctop.addEventListener('click', () => {
      deactivateButton(btnMobile)
      activateButton(btnDesctop)
      desktopColumn.style.display = 'block'
      mobileColumn.style.display = 'none'
    })
  }
}
