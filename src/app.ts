import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {main} from './main/mainrouter';

export const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));

app.use(cors());

app.use('/', main);
