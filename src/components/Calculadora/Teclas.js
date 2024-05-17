import styles from "./styles/Teclas.module.css";
import PropTypes from "prop-types";

function Teclas({ numero, event }) {
  if (numero) {
    return (
      <div className={styles.teclas} onClick={event}>
        <p>{numero}</p>
      </div>
    );
  }
}

export default Teclas;
