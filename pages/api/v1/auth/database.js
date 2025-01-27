import { createPool } from '@vercel/postgres';
const comissaoPlataforma = 1;
const tipoComissaoPlataforma = "percentualValue";


async function query(rota, dados) {
  if (!process.env.POSTGRES_URL) {
    return { error: 'Variável de ambiente POSTGRES_URL não definida' };
  }

 

  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  try {

    if (rota === 'auth') {
      const identificacao = dados?.identificacao;
      const autenticacao = dados?.autenticacao;

     
      const countResult = await pool.query(
        'SELECT COUNT(*) FROM mfr_usuarios WHERE id_unico = $1 and api_auth = $2',
        [identificacao, autenticacao]
      );

      const resp = parseInt(countResult.rows[0]?.count) > 0;
    
      return { data: resp };
    }

   
    //////////////// FIM
  
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
    return resultado;
  } catch (error) {
    console.error('Erro na consulta:', error);
    throw error;
  }
}

export default consulta;
