import conectarAoBanco from '../config/dbConfig.js';
// Importa a função `conectarAoBanco` do arquivo `dbConfig.js`, responsável por estabelecer a conexão com o banco de dados.


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Chama a função `conectarAoBanco` com a string de conexão obtida da variável de ambiente `STRING_CONEXAO` e armazena a conexão estabelecida na variável `conexao`. A palavra-chave `async/await` é utilizada para lidar com operações assíncronas, como a conexão com o banco de dados.

export default async function getTodosPosts(params) {
    // Define uma função assíncrona chamada `getTodosPosts` que recebe um objeto `params` como parâmetro (embora não esteja sendo utilizado no momento).
    const db = conexao.db('imersao-dev');
    // Obtém o banco de dados chamado 'imersao-dev' a partir da conexão estabelecida.
    const colecao = db.collection('posts');
    // Obtém a coleção 'posts' dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados em um array.
}
