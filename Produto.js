import Produto from "../Model/Produto.js";


export const criarProduto = async (req, res) => {
    const { nome, descricao, preco, categoriaId } = req.body;

    if (!nome || !descricao || !preco || !categoriaId) {
        return res.status(400).json({ message: "Os campos 'nome', 'descricao', 'preco' e 'categoriaId' são obrigatórios." });
    }

    try {
        const novoProduto = new Produto({ nome, descricao, preco, categoriaId });
        await novoProduto.save();
        res.status(201).json({ message: "Produto criado com sucesso!", produto: novoProduto });
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar o produto.", error: err.message });
    }
};

export const editarProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, categoriaId } = req.body;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(
            id,
            { nome, descricao, preco, categoriaId },
            { new: true, runValidators: true }
        );

        if (!produtoAtualizado) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        res.status(200).json({ message: "Produto atualizado com sucesso!", produto: produtoAtualizado });
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar o produto.", error: err.message });
    }
};

export const deletarProduto = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const produtoDeletado = await Produto.findByIdAndDelete(id);

        if (!produtoDeletado) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao deletar o produto.", error: err.message });
    }
};

export const buscarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar os produtos.", error: err.message });
    }
};

export const buscarProduto = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const produto = await Produto.findById(id);

        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        res.status(200).json(produto);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar o produto.", error: err.message });
    }
};
