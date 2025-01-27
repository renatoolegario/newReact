import NodeCache from 'node-cache';
import consulta from './database';

const cache = new NodeCache({ stdTTL: 60 }); // Cache com tempo de vida padrão de 1 hora (3600 segundos)

async function auth(request, response) {
  const { identificacao, autenticacao } = request.body; // Usando request.body para POST

  if (!identificacao || !autenticacao) {
    return response.status(400).json({ error: 'Parâmetros incompletos' });
  }

  const cacheKey = `${identificacao}-${autenticacao}`;
  const cachedResult = cache.get(cacheKey);

  if (cachedResult !== undefined) {
    return response.status(200).json({ data: cachedResult });
  }

 
  const dados = { identificacao, autenticacao };
  try {
    const resultadoConsulta = await consulta('auth', dados);
    const data = resultadoConsulta.data;
    cache.set(cacheKey, data);

    return response.status(200).json({ data: data });
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    return response.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }
}

export default auth;
