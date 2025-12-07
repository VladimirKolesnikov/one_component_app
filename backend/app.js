import express from 'express';
import cors from 'cors';

const list = [
    { id: 1, coord: { lat: 47.8507859, lon: 35.1182867 }},
    { id: 2, coord: { lat: 50.2598298, lon: 28.6692345 }},
    { id: 3, coord: { lat: 48.6223732, lon: 22.3022569 }},
    { id: 4, coord: { lat: 48.4680221, lon: 35.0417711 }},
]

const app = express();

app.use(express.json())
app.use(cors())

app.get('/coords', (req, res) => {
    res.send(list)
})

app.post('/coords', (req, res) => {
    if (!req.body.coords) {
        res.sendStatus(422)
    }

    res.statusCode = 201;
    res.send({})
})

app.listen(3005);

// { lat: 47.8507859, lon: 35.1182867 } zp
// { lat: 50.2598298, lon: 28.6692345 } zhytomyr
// { lat: 48.6223732, lon: 22.3022569 } uzhhorod
// { lat: 48.4680221, lon: 35.0417711 } dnipro

// app.options('/coords', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
// })