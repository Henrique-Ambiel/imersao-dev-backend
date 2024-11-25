import express from 'express';
// Importa o framework Express, que será utilizado para criar a aplicação web.
import routes from './src/routes/postsRoutes.js';

const app = express();
// Cria uma instância do Express, que será o ponto de partida da nossa aplicação.
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console indicando que o servidor está ouvindo.