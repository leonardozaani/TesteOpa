import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import usuarios from "./Controller/Usuarios.js";
import Produto from "./Controller/Produtos.js";
import Categoria from "./Controller/Categorias.js";

dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

app.use(bodyParser.json());
app.use("/usuarios", usuarios);
app.use("/produtos", Produto)
app.use("/categorias", Categoria);


mongoose
  .connect(mongoURI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));


app.listen(1000);
