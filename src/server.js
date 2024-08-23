const express = require('express');

const router = require('./router/router');
const sequelize = require('./config/config');
const produtoRouter = require('./router/ProdutoRouter');

const app = express();

app.use(express.json());
app.use('/api/user/', UserRouter);
app.use('/api/produto/', produtoRouter);

app.get('/healthcheck', (req, res) =>{
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    });
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão estabelecida com sucesso");
    return sequelize.sync();
})
.then(() => {
    app.listen(8080, () => {
        console.log("#############");
        console.log("Rodando na porta 8080");
        console.log("#############");
    });
})

.catch((error) => {
    console.error("Erro ao se conectar com o banco:", error);
});