// 8. Cálculo de Impuestos
const calcularImpuestos = (() => {
    const porcentajeImpuesto = 0.18;
    return (monto) => {
      return monto * porcentajeImpuesto;
    };
  })();
  
  console.log("Impuestos a pagar por $100:", calcularImpuestos(100));