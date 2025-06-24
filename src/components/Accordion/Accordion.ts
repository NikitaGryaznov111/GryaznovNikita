import styles from './Accordion.module.scss'
export default function renderAccordion(): void {
  const uiSection = document.getElementById('ui')
  if (!uiSection) return
  const accordion = `
      <div class="${styles.accordion}">
        <h3 class="${styles.accordionTile}">Аккордеон</h3>
        <div class="${styles.accordionContainer}">
          <div class="${styles.accordionItemOne}" id="accordionItemInteractive">
            <details class="${styles.details}" id="details">
              <summary class="${styles.detailsTitle}" id="detailsTitle">Аккордеон</summary>
              <p class="${styles.detailsContent}" id="detailsContent">Гоpдость полными вагонами золотыми погонами <br>
                С юга дyют молодые вет… <br>
                Pазpывая в клочья облака не забыли шлют из далека <br>
                С дома мама И не последняя любовь <br>
                А по небy бегyт видишь чьи-то следы <br>
                Это может быть ты это может быть я <br>
                Это может наш дрyг <br>
                Это может нам поют свои</p></p>
            </details>
          </div>
          <div class="${styles.accordionItemTwo}">
            <p>Аккордеон</p>
          </div>
          <div class="${styles.accordionItemThree}">
            <details open id="detailsDefault">
              <summary>Аккордеон</summary>
              <p>Гоpдость полными вагонами золотыми погонами <br>
                С юга дyют молодые вет… <br>
                Pазpывая в клочья облака не забыли шлют из далека <br>
                С дома мама И не последняя любовь <br>
                А по небy бегyт видишь чьи-то следы <br>
                Это может быть ты это может быть я <br>
                Это может наш дрyг <br>
                Это может нам поют свои</p>
            </details>
          </div>
        </div>
      </div>
  `

  uiSection.insertAdjacentHTML('beforeend', accordion)
  const detailsDefault = document.getElementById(
    'detailsDefault'
  ) as HTMLDetailsElement | null
  const detailsTitle = document.getElementById('detailsTitle')
  const accordionItemInteractive = document.getElementById(
    'accordionItemInteractive'
  )
  const details = document.getElementById(
    'details'
  ) as HTMLDetailsElement | null
  const detailsContent = document.getElementById('detailsContent')
  if (
    !detailsDefault ||
    !detailsTitle ||
    !accordionItemInteractive ||
    !details ||
    !detailsContent
  )
    return

  detailsDefault.addEventListener('click', (event) => {
    if (detailsDefault.open) {
      event.preventDefault()
    }
  })
  detailsTitle.addEventListener('click', () => {
    accordionItemInteractive.classList.toggle(styles.accordionActive)
  })
  // requestAnimationFrame(() => {
  //   if (!details.open) {
  //     detailsContent.style.maxHeight = '0'
  //   } else {
  //     detailsContent.style.maxHeight = `${detailsContent.scrollHeight}px`
  //   }
  // })
  // details.addEventListener('toggle', () => {
  //   if (details.open) {
  //     detailsContent.style.maxHeight = '0'

  //     requestAnimationFrame(() => {
  //       detailsContent.style.maxHeight = `${detailsContent.scrollHeight}px`
  //     })
  //   } else {
  //     detailsContent.style.maxHeight = `${detailsContent.scrollHeight}px`

  //     requestAnimationFrame(() => {
  //       detailsContent.style.maxHeight = '0'
  //     })
  //   }
  // })
}
