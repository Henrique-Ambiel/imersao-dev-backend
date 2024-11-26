import getTodosPosts from '../models/modelPosts.js';

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
} 

export async function postarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Erro: falha na requisição...');
    }
}