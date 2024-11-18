import Categoria from "../Model/Categoria.js";


export const criarCategoria = async (req, res) => {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
        return res.status(400).json({ message: "Os campos 'nome' e 'descricao' são obrigatórios." });
    }

    try {
        const novaCategoria = new Categoria({ nome, descricao });
        await novaCategoria.save();
        res.status(201).json({ message: "Categoria criada com sucesso!", categoria: novaCategoria });
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar a categoria.", error: err.message });
    }
};


export const editarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const categoriaAtualizada = await Categoria.findByIdAndUpdate(
            id,
            { nome, descricao },
            { new: true, runValidators: true }
        );

        if (!categoriaAtualizada) {
            return res.status(404).json({ message: "Categoria não encontrada." });
        }

        res.status(200).json({ message: "Categoria atualizada com sucesso!", categoria: categoriaAtualizada });
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar a categoria.", error: err.message });
    }
};


export const deletarCategoria = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const categoriaDeletada = await Categoria.findByIdAndDelete(id);

        if (!categoriaDeletada) {
            return res.status(404).json({ message: "Categoria não encontrada." });
        }

        res.status(200).json({ message: "Categoria deletada com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao deletar a categoria.", error: err.message });
    }
};


export const buscarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar as categorias.", error: err.message });
    }
};

export const buscarCategoria = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "O parâmetro 'id' é obrigatório." });
    }

    try {
        const categoria = await Categoria.findById(id);

        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada." });
        }

        res.status(200).json(categoria);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar a categoria.", error: err.message });
    }
};
