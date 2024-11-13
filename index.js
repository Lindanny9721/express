const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});
app.get('/user/:userID', (req, res) => {
    res.render('user', { title: 'User Profile', user: req.params.userID });
});
app.post('/submit', (req, res) => {
    console.log('Form:', req.body);
    res.send('Form submitted');
});
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});