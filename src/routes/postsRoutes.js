import express from "express" 
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware `express.json()`, que permite que a aplicação receba dados no formato JSON nas requisições.

    app.get("/posts", listarPosts);
    
}

export default routes;
