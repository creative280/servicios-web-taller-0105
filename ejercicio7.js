// 7. Palíndromo
const esPalindromo = (palabra) => {
    const palabraReversa = palabra.split("").reverse().join("");
    return palabra === palabraReversa;
  };
  
  console.log("¿Es 'reconocer' un palíndromo?:", esPalindromo("reconocer"));
  