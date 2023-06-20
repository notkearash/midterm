const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

app.use(express.json());

const studentsRouter = require('./routes/student.routes');
app.use('/students', studentsRouter);

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`));
