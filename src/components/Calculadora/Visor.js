import styles from "./styles/Visor.module.css";

function Visor({ texto }) {
  return <div className={styles.visor}>{texto}</div>;
}

export default Visor;
