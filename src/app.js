import { errorLogger, requestLogger } from './utils';

import { ERROR_STATUS } from './constants/status';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/favicon.ico', (_, res) => {});

app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.all('*', (_, res) => {
    const { code, message } = ERROR_STATUS.ERROR_STATUS.INVALID_ROUTE;
    res.status(code).send(message);
});
app.use(errorLogger);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 3000');
});
