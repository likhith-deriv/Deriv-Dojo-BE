import fs from 'fs';
import path from 'path';

export const requestLogger = (req, _, next) => {
    let log_message = `${new Date()} - ${req.method} ${req.url} \n`;
    if (req.method === 'POST') {
        log_message += `Body: ${JSON.stringify(req.body)} \n`;
    }
    log_message += `---------------------------- \n`;
    const file_path = path.join(path.resolve(), '../..', 'logs', 'request-logs', 'request.txt');
    fs.appendFile(file_path, log_message, err => {
        if (err) return next(err);
    });
    next();
};

export const errorLogger = (err, _, res, next) => {
    if (err) {
        const errorMessage = '\n' + new Date() + '-' + err.stack || err.message + '\n';
        const file_path = path.join(path.resolve(), '../..', 'logs', 'error-logs', 'error.txt');
        fs.appendFile(file_path, errorMessage, err => {
            if (err) return next(err);
        });
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({ message: err.message });
    }
    next();
};
