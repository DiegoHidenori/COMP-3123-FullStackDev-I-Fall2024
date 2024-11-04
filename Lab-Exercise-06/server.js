const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const connectDB = require('./db');

const bodyParser = require('body-parser');
const DB_URL = "mongodb+srv://admin:admin@fullstack-exercises.qtvv8.mongodb.net/LabExercise-06?retryWrites=true&w=majority&appName=FullStack-Exercises";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const NoteRoutes = require('./routes/NoteRoutes');

app.use(express.json());
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to the database mongoDB Atlas Server');
}).catch((error) => {
  console.log('Could not connect to the database. Exiting now...', error);
    process.exit();
});

app.use(NoteRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Note taking application - Week06 Exercise</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
