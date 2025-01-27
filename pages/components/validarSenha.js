function validarTamanhoSenha(senha) {
    // Verificar se a senha tem pelo menos 5 caracteres
    return senha.length >= 5 ? 1 : 0;
  }

  export default validarTamanhoSenha;