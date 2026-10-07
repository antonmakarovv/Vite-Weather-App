import styles from './MagnifierBtn.module.css';


export default () => {
  return `
    <button class='${styles.root}' type='button'>
      <img src='/magnifier.png' alt="Magnifier Icon" width="15.5" style='filter: invert(100%)'>
    </button>
  `
}