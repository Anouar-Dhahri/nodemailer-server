const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/mail', require('./routes/Mail.routes'));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App working on port ${port}!`))