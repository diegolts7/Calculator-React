import Teclas from "./Teclas";
import styles from "./styles/Calculadora.module.css";
import Visor from "./Visor";
import Operadores from "./Operadores";
import { useState } from "react";
import Calcular from "./Calcular";

function Calculadora() {
  const [text, setText] = useState("0");
  const [operacao, setOperacao] = useState([]);
  const [operadorUsado, setOperadorUsado] = useState();
  const [operacaoAtiva, setOperacaoAtiva] = useState(false);
  const [mostrarOperacao, setMostrarOperacao] = useState();

  function btnClicado(e) {
    if (
      (text === "0" || text === "undefined") &&
      e.target.textContent !== "."
    ) {
      setText(e.target.textContent);
    } else {
      setText(text + e.target.textContent);
    }
  }
  function operadorClicado(e) {
    if (!operacaoAtiva) {
      setOperacao(text);
      setMostrarOperacao(text + e.currentTarget.id);
      setOperadorUsado(e.currentTarget.id);
      setText("");
      setOperacaoAtiva(true);
    }
  }

  function limparVisor() {
    setText("0");
  }

  function limparUltimoNum() {
    if (text.slice(0, text.length - 1) === "") {
      limparVisor();
    } else {
      setText(text.slice(0, text.length - 1));
    }
  }

  function fazerOperacao() {
    if (operacaoAtiva && text !== "") {
      let calculo = Calcular({ num1: operacao, num2: text }, operadorUsado);
      setMostrarOperacao(`${mostrarOperacao}${text}`);
      setText(`${calculo}`);
      setOperadorUsado();
      setOperacaoAtiva(false);
      setOperacao();
    }
  }

  return (
    <div className={styles.conteinerCalculadora}>
      <Visor texto={text} valorOperacao={mostrarOperacao} />
      <Operadores operador="AC" event={limparVisor} />
      <Operadores operador="<-" event={limparUltimoNum} />
      <Operadores operador="%" event={operadorClicado} />
      <Operadores operador="/" event={operadorClicado} />
      <Teclas numero={"7"} event={btnClicado} />
      <Teclas numero={"8"} event={btnClicado} />
      <Teclas numero={"9"} event={btnClicado} />
      <Operadores operador="x" event={operadorClicado} />
      <Teclas numero={"4"} event={btnClicado} />
      <Teclas numero={"5"} event={btnClicado} />
      <Teclas numero={"6"} event={btnClicado} />
      <Operadores operador="-" event={operadorClicado} />
      <Teclas numero={"1"} event={btnClicado} />
      <Teclas numero={"2"} event={btnClicado} />
      <Teclas numero={"3"} event={btnClicado} />
      <Operadores operador="+" event={operadorClicado} />
      <Operadores operador=" " />
      <Teclas numero={"0"} event={btnClicado} />
      <Teclas numero="." event={btnClicado} />
      <Operadores operador="=" event={fazerOperacao} />
    </div>
  );
}

export default Calculadora;
