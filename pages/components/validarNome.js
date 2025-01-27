function validarTamanhoNome(nome,tamanho) {
  
    if(!tamanho){tamanho = 3;}
    return nome.length >= tamanho ? 1 : 0;
  }

  export default validarTamanhoNome;