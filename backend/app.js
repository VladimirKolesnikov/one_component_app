import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    //
})

app.post('/', (req, res) => {
    console.log('this is post!!')
    const b = req.body
    console.log(b)
    res.end()
})

app.listen(3005);

// watch video "express cors" 03:54