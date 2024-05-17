import styles from "./styles/Visor.module.css";

function Visor({ texto, valorOperacao }) {
  return (
    <div className={styles.visor}>
      <div className={styles.visorOperacao}>{valorOperacao}</div>
      <div className={styles.visorText}>{texto}</div>
    </div>
  );
}

export default Visor;
