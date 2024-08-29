const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const uploadRoutes = require('./routes/upload');
const confirmRoutes = require('./routes/confirm');
const listRoutes = require('./routes/list');
const errorHandler = require('./utils/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json({ limit: '50mb' }));

app.use('/upload', uploadRoutes);
app.use('/confirm', confirmRoutes);
app.use('/list', listRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Serviço de Leitura de Consumo de Água e Gás');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;
