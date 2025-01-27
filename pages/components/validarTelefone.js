function validarTelefone(telefone){

     // Remover caracteres não numéricos
  const telefoneLimpo = telefone.toString().replace(/\D/g, '');

  // Verificar se o número de telefone tem entre 10 e 11 caracteres
  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11 ? 1 : 0;

};

export default validarTelefone;