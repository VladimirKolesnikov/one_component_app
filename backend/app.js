import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { coordRouter } from './routes/coord.router.js';
import { authRouter } from './routes/auth.router.js';
import { authMiddleware } from './middlewares/authMIddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const port = process.env.PORT || 3005;

const app = express();

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
}))
app.use('/me/coords', authMiddleware, coordRouter)
app.use('/auth', authRouter)
app.use(errorMiddleware)

app.listen(port);

// { lat: 47.8507859, lon: 35.1182867 } zp
// { lat: 50.2598298, lon: 28.6692345 } zhytomyr
// { lat: 48.6223732, lon: 22.3022569 } uzhhorod
// { lat: 48.4680221, lon: 35.0417711 } dnipro

// app.options('/coords', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
// })

// res.status(code)
// res.json()