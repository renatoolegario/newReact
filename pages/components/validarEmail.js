function validarEmail(email) {
    // Expressão regular para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Testar o e-mail usando a expressão regular
    return regexEmail.test(email) ? 1 : 0;
  }
  
  export default validarEmail;
  