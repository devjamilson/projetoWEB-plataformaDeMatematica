const express = require('express');
const estudanteRoutes = require('./routes/estudanteRoutes');
const exercicioRoutes = require('./routes/exercicioRoutes');
const acertoRoutes = require('./routes/acertoRoutes');
const erroRoutes = require('./routes/erroRoutes');
const desempenhoRoutes = require('./routes/desempenhoRoutes');
const areaRoutes = require('./routes/areaRoutes');
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors');

const app = express();
const port = 5500;

app.use(express.json());
app.use(cors()); 

app.use('/api/estudantes', estudanteRoutes);
app.use('/api/exercicios', exercicioRoutes);
app.use('/api/acertos', acertoRoutes);
app.use('/api/erros', erroRoutes);
app.use('/api/desempenho', desempenhoRoutes);
app.use('/api/areas', areaRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
