const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser("userOne"));
app.get('/', (req, res) => {
    res.cookie('name', 'UserOne', { signed: true, maxAge: 1000000 });
    const signedCookie = req.signedCookies.name;
    if (signedCookie) {
        console.log('Cookie value:', signedCookie);
    } else {
        console.log('No cookies found');
    }
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