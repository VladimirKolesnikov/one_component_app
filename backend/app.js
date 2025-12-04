import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.write('<h1>ololo!</h1>')
    next()
})

app.get('/', (req, res) => {
    res.write('<h2>ololo!2</h2>')
    res.end()
})

app.listen(3005);
