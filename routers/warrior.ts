import { Router } from "express";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req,res) => {
        res.send('Add warrior')
    })

    .post('/')