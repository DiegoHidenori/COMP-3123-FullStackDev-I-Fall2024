const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Base
app.get('/', (req, res) => {
    res.send('Hello there!');
})

// GET request for the /hello endpoint
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});


// GET reuqest for the /user endopoint
app.get('/user', (req, res) => {
    const { firstName = 'Diego', lastName = 'Tsukayama' } = req.query;
    res.json({firstName, lastName});
});


// POST request for the /user endpoint
app.post('/user/:firstName/:lastName', (req, res) => {
    const { firstName, lastName } = req.params;
    res.json({firstName, lastName});
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
