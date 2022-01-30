import express from 'express';
import { createServer } from 'http';
import './config';
import cors from 'cors';
import router from './api/router';

const app = express();

app.disable('x-powered-by');
app.disable('etag');
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use('/', router);

const IP = process.env.IP || '0.0.0.0';
const PORT = parseInt(process.env.PORT || '3000');

const httpServer = createServer(app).listen(PORT, IP, () => {
    console.log(`Started server at ${IP}:${PORT}`);
});

process.on('SIGINT', () => {
    console.log(`\nBye bye!`);
    process.exit(0);
})