import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 3000');
});
