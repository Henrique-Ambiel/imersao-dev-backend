import express from 'express';

const posts = [
    {
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x200",
    },
    {
        descricao: "Comida deliciosa",
        imagem: "https://picsum.photos/seed/picsum/300/200",
    }
];

// Cria uma instância do Express, que é o nosso servidor web
const app = express();
app.use(express.json());

// Inicia o servidor, escutando na porta 3000
app.listen(3000, () => {
    // Mensagem de log para indicar que o servidor está em funcionamento
    console.log("Servidor escutando na porta 3000");
});

// Define uma rota GET para a URL '/api'
app.get("/posts", (req, res) => {
    // Define o status da resposta como 200 (OK) e envia a string "Teste" como corpo da resposta
    res.status(200).json(posts);
});