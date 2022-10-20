const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const usersRoutes = require('./routes/users.route');

app.use(express.json());

app.use('/user', usersRoutes);

app.get('/', (req, res) => {
    res.send('Random user server is running');
});

app.listen(port, () => {
    console.log('Listening from port', port);
});