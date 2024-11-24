import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosPosts(params) {
    const db = conexao.db('imersao-dev');
    const colecao = db.collection('posts');
    return colecao.find().toArray();
}

app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
});

// function buscarPosts(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     })
// };

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPosts(req.params.id)
//     res.status(200).json(posts[index]);
// });