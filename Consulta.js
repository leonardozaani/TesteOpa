import Categoria from "../Model/Categoria.js";
import Produto from "../Model/Produto.js";

export const consultarCategoriasComProdutos = async (req, res) => {
    try {
        const categorias = await Categoria.find().populate("produtos");
        res.status(200).json(categorias);
    } catch (err) {
        res.status(500).json({ message: "Erro ao consultar dados.", error: err.message });
    }
};

export const consultarProdutosPorCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const produtos = await Produto.find({ categorias: id });
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ message: "Erro ao consultar produtos.", error: err.message });
    }
};
