function Calcular(numeros, operador) {
  switch (operador) {
    case "+":
      return Number(numeros.num1) + Number(numeros.num2);
    case "-":
      return Number(numeros.num1) - Number(numeros.num2);
    case "x":
      return Number(numeros.num1) * Number(numeros.num2);
    case "/":
      if (numeros.num2 === "0") {
        return undefined;
      } else {
        return Number(numeros.num1) / Number(numeros.num2);
      }
    case "%":
      return (Number(numeros.num1) / 100) * Number(numeros.num2);
  }
}

export default Calcular;
