import fetch from 'node-fetch';
import validarEmail from '../../../components/validarEmail';
import validarTamanhoSenha from '../../../components/validarSenha';
import validarCnpjCpf from '../../../components/validarCNPJeCPF';
import validarTelefone from '../../../components/validarTelefone';
import validarTamanhoNome from '../../../components/validarNome';

//const host = 'https://fluffy-cod-p9x6vr7jww9f6vwx-3000.app.github.dev';
const host = 'https://multiplasfr.com.br';

function gerarChaveAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';
    const caracteresLength = caracteres.length;
  
    for (let i = 0; i < tamanho; i++) {
      chave += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
  
    return chave;
  }

  async function tratarTelefone(telefone) {
    // Garante que 'telefone' seja uma string e remove caracteres não numéricos
    console.log(telefone);
    telefone = telefone.toString().replace(/[^0-9]/g, '');
  
    telefone = '55' + telefone;
    
    // Extrai o DDD do número, considerando que o prefixo '55' é para o Brasil
    const ddd = telefone.substring(2, 4);
    const resto = telefone.substring(0, 4); // '55' + DDD
    const tel = telefone.substring(telefone.length - 8); // Últimos 8 dígitos
  
    // Verifica a necessidade de adicionar '9' para números de celular
    // A regra do '9' aplica-se se o DDD estiver entre 11 e 29 e não houver '9' após o DDD
    if (parseInt(ddd) >= 11 && parseInt(ddd) <= 30) {
        telefone = resto  + '9' + tel
    }
  
    return telefone;
  }



 
  async function consulta(rota, dados) {
    const url = `${host}/api/v1/${rota}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });
  
  
    if (!response.ok) {
      throw new Error('Erro na consulta');
    }
  
    const result = await response.json();
    return result;
  }



async function webhook(request, response) {

    if (request.method === 'POST') {

        const body = request.body;

        let { rota, identificacao, autenticacao, dados } = request.body;

        if (!rota || !identificacao || !autenticacao || !dados) {
            return response.status(400).json({ error: 'Parâmetros incompletos' });
        }


        try {
            const authUrl = `${host}/api/v1/auth`;
            const authResponse = await fetch(authUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ identificacao, autenticacao }),
            });
    
    
            if (!authResponse.ok) {
              return response.status(401).json({ error: 'Autenticação falhou' });
            }
    
            const authResult = await authResponse.json();
            const autenticado = authResult.data;
    
            if (!autenticado) {
              return response.status(401).json({ error: 'Autenticação falhou' });
            }
    
              let data;
              let  status_resp;
              data = 'rota não suportada';
              status_resp = 'falha';


              //aqui são as rotas


              // fim das rotas


              console.log({data: data , status: status_resp, rota});        
              response.status(200).json({ data: data , status: status_resp });


        } catch (error) {
            console.error('Erro no webhook:', error);
            response.status(500).json({ error: error.message });
        }



    }


    if (request.method === 'GET'){

    }
}



export default webhook;