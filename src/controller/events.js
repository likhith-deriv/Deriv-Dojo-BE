import { addRecord } from '../utils';
import express from 'express';

export const eventController = express.Router();

eventController.post('/create', (req, res) => {
    addRecord('events', req.body);
});
