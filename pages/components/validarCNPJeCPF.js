function validarCnpjCpf(dados) {
    // Remover caracteres não numéricos
    const cnpjCpf = dados.toString().replace(/\D/g, '');
  
    // Verificar se é CNPJ ou CPF
    if (cnpjCpf.length === 11) {
      // É CPF
      return validarCpf(cnpjCpf) ? 1 : 0;
    } else if (cnpjCpf.length === 14) {
      // É CNPJ
      return validarCnpj(cnpjCpf) ? 1 : 0;
    } else {
      // Tamanho inválido, nem CPF nem CNPJ
      return 0;
    }
  }


  function validarCnpj(cnpj) {
    // Remove caracteres não numéricos do CNPJ
    const cnpjNumerico = cnpj.replace(/\D/g, '');

    // Verifica se o CNPJ possui 14 dígitos
    if (cnpjNumerico.length !== 14) {
        return 0; // CNPJ inválido
    }

    // Calcula os dígitos verificadores
    let soma = 0;
    let pos = 5;

    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpjNumerico.charAt(i)) * pos;
        pos--;

        if (pos === 1) {
            pos = 9;
        }
    }

    const resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Verifica o primeiro dígito verificador
    if (parseInt(cnpjNumerico.charAt(12)) !== resultado) {
        return 0; // CNPJ inválido
    }

    // Reinicia as variáveis para o segundo dígito verificador
    soma = 0;
    pos = 6;

    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpjNumerico.charAt(i)) * pos;
        pos--;

        if (pos === 1) {
            pos = 9;
        }
    }

    const segundoDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Verifica o segundo dígito verificador
    if (parseInt(cnpjNumerico.charAt(13)) !== segundoDigito) {
        return 0; // CNPJ inválido
    }

    return 1; // CNPJ válido
}
  
  function validarCpf(cpf) {
    // Remover caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D/g, '');
  
    // Verificar se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
      return false;
    }
  
    // Calcular o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    const resto = soma % 11;
    const digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
    // Calcular o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    const resto2 = soma % 11;
    const digitoVerificador2 = resto2 < 2 ? 0 : 11 - resto2;
  
    // Verificar se os dígitos verificadores calculados correspondem aos dígitos reais
    return parseInt(cpfLimpo.charAt(9)) === digitoVerificador1 && parseInt(cpfLimpo.charAt(10)) === digitoVerificador2;
  }
  
   

export default validarCnpjCpf;