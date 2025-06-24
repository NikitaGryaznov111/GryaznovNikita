/**
 * Рендерит секцию с информацией об адаптивной сетке после приветственного блока.
 *
 * Функция:
 * 1. Находит элемент с id "greeting" в DOM.
 * 2. Если элемент найден, вставляет после него HTML-разметку с описанием трёх адаптивных состояний:
 *    десктоп (1200+), планшет (736+) и телефон (320+).
 * 3. Каждое состояние содержит информацию о количестве колонок, ширине контента,
 *    ширине колонки и межколонном пространстве, а также изображение-пример сетки.
 *
 * @returns {void} Ничего не возвращает.
 */
import styles from './GridSection.module.scss'
export default function renderGridSection(): void {
  const greeting = document.getElementById('greeting')
  if (!greeting) return
  const gridSection = `
      <section class="${styles.grid}" id="grid">
        <h2 class="${styles.gridTitle}">Сетка</h2>
        <p class="${styles.gridDescription}">Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от
          устройства. Сетка
          «резиновая» — переменной ширины.</p>
        <h3 class="${styles.gridDeviceName}">Десктоп (1200+)</h3>
        <div class="${styles.gridContainer}">
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Контент</p>
            <p class="${styles.gridItemDesc}">1072–1312</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}"">Колонок</p>
            <p class="${styles.gridItemDesc}"">12</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}"">Ширина колонки</p>
            <p class="${styles.gridItemDesc}"">60-80</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}"">Межколонник</p>
            <p class="${styles.gridItemDesc}"">32</p>
          </div>
        </div>
        <img src="src/assets/images/desctopGrid.png" alt="Десктопная сетка">

        <h3 class="${styles.gridDeviceName}">Планшет (736+)</h3>
        <div class="${styles.gridContainer}">
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Контент</p>
            <p class="${styles.gridItemDesc}">672–928</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Колонок</p>
            <p class="${styles.gridItemDesc}">8</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Ширина колонки</p>
            <p class="${styles.gridItemDesc}">56-88</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Межколонник</p>
            <p class="${styles.gridItemDesc}">32</p>
          </div>
        </div>
        <img src="src/assets/images/tabletGrid.png" alt="Планшетная сетка">

        <h3 class="${styles.gridDeviceName}">Телефон (320+)</h3>
        <div class="${styles.gridContainer}">
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Контент</p>
            <p class="${styles.gridItemDesc}">296–424</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Колонок</p>
            <p class="${styles.gridItemDesc}">4</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Ширина колонки</p>
            <p class="${styles.gridItemDesc}">56-88</p>
          </div>
          <div class="${styles.gridItem}">
            <p class="${styles.gridItemTitle}">Межколонник</p>
            <p class="${styles.gridItemDesc}">24</p>
          </div>
        </div>
        <img src="src/assets/images/mobileGrid.png" alt="Мобильная сетка">
      </section>

`
  greeting.insertAdjacentHTML('afterend', gridSection)
}
