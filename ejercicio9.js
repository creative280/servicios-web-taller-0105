// 9. Generador de Tabla de Multiplicar
const generarTablaMultiplicar = (numero) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  };
  
  console.log("Tabla de multiplicar del 5:");
  generarTablaMultiplicar(5);
  