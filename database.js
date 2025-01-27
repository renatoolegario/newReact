
async function query(rota, dados) {
  if (!process.env.POSTGRES_URL) {
    return { error: 'Variável de ambiente POSTGRES_URL não definida' };
  }

  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  //console.log('Pool de conexão PostgreSQL criado com sucesso.');

  try {

    if(rota === 'autenticacaoUsuario'){
      const emailContato        = dados?.email.toLowerCase();
      const senha               = dados?.senha;
      const apiInterna          = dados?.apiInterna;
      let countResult = "";
      if(!emailContato || !senha){
        countResult = await pool.query('SELECT COUNT(*) FROM usuario_whitelabel WHERE api_unico = $1', [apiInterna]);
      }else{
        countResult = await pool.query('SELECT COUNT(*) FROM usuario_whitelabel WHERE email_contato = $1 AND senha = $2', [emailContato, senha]);
      }
      const cnpjCpfExistente = parseInt(countResult.rows[0]?.count) > 0;
      
      if (cnpjCpfExistente) {
        //adiciona os cookies temporários com 1h de duração
        let countResult = await pool.query('SELECT api_unico FROM usuario_whitelabel WHERE email_contato = $1 AND senha = $2', [emailContato, senha]);
        if (countResult.rows.length > 0) {
          const apiUnico = countResult.rows[0].api_unico;
         
          const currentTime = new Date().getTime();

          // Calcula o timestamp para daqui a 3 horas (3 * 60 * 60 * 1000 milissegundos)
          const expirationTime = currentTime + 3 * 60 * 60 * 1000;

          return { status: 'ok', data: 'Autenticado', expiracao: expirationTime , api:  apiUnico}; 
        }
      }else{
        return { status: 'ok', data: 'E-mail ou senha errada.' }; 
      }
    }

   
	
	
	
	
	
	
	
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    return { error: `Erro interno do servidor - ${error}` };
  } finally {
    await pool.end();
  }
}

async function consulta(rota, dados) {
  try {
    const resultado = await query(rota, dados);
    //console.log('Consulta result:', resultado);
    return resultado;
  } catch (error) {
    console.error('Erro na consulta:', error);
    throw error; // Rejogue o erro para que ele seja capturado pelo caller (quem chama a função)
  }
}

export default consulta;