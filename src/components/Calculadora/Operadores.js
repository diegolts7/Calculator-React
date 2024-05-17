import styles from "./styles/Teclas.module.css";
import {
  CgBackspace,
  CgMathPercent,
  CgMathDivide,
  CgMathEqual,
  CgMathPlus,
  CgMathMinus,
  CgClose,
} from "react-icons/cg";
import { IoCalculator } from "react-icons/io5";

function Operadores({ operador, event }) {
  if (operador === "<-") {
    return (
      <div className={styles.teclas} onClick={event}>
        <CgBackspace className={styles.corOperador} />
      </div>
    );
  }
  if (operador === "/") {
    return (
      <div className={styles.teclas} onClick={event} id="/">
        <CgMathDivide className={styles.corOperador} />
      </div>
    );
  }
  if (operador === "%") {
    return (
      <div className={styles.teclas} onClick={event} id="%">
        <CgMathPercent className={styles.corOperador} />
      </div>
    );
  }
  if (operador === "+") {
    return (
      <div className={styles.teclas} id="+" onClick={event}>
        <CgMathPlus className={styles.corOperador} />
      </div>
    );
  }
  if (operador === "-") {
    return (
      <div className={styles.teclas} onClick={event} id="-">
        <CgMathMinus className={styles.corOperador} />
      </div>
    );
  }
  if (operador === "=") {
    return (
      <div className={styles.teclas} onClick={event}>
        <CgMathEqual className={styles.corOperador} />
      </div>
    );
  }
  if (operador === " ") {
    return (
      <div
        className={styles.teclas}
        style={{
          color: "white",
          backgroundColor: "inherit",
          border: "none",
          cursor: "default",
        }}
      >
        <IoCalculator />
      </div>
    );
  }
  if (operador === "x") {
    return (
      <div className={styles.teclas} onClick={event} id="x">
        <CgClose className={styles.corOperador} />
      </div>
    );
  }
  return (
    <div className={styles.teclas} onClick={event}>
      <p className={styles.corOperador}>{operador}</p>
    </div>
  );
}

export default Operadores;
