import styles from './ShowStat.module.css';

export default () => {
  return `
  <div class='${styles.root}'>
    <div>
      <p class="${styles.details}">💧</p>
      <p class="${styles.data}" id='humidity'></p>
    </div>
    <div>
      <p class="${styles.details}">💨</p>
      <p class="${styles.data}" id='wind-speed'></p>
    </div>
    <div>
      <p class="${styles.details}">⬆️</p>
      <p class="${styles.data}" id='temp-max'></p>
    </div>
    <div>
      <p class="${styles.details}">⬇️</p>
      <p class="${styles.data}" id='temp-min'></p>
    </div>
  </div>
  `
}