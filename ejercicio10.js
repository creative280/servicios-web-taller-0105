// 10. Validación de Contraseña
const validarContraseña = (contraseña) => {
    const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(contraseña);
  };
  
  console.log("¿La contraseña 'Abc1234*' es válida?:", validarContraseña("Abc1234*"));