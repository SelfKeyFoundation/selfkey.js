const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3331;

app.use(bodyParser.json({ limit: '300mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1/', api);
app.listen(PORT, () => console.log(`dev server is listening on ${PORT}`));
