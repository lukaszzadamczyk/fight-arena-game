import { Router } from "express";
import {WarriorRecord} from "../records/warrior.record";

export const hallOfFameRouter = Router();

hallOfFameRouter


    .get('/', async (req,res) => {
        const warriors = (await WarriorRecord.listTop(10)
        ).map((warrior, i) => {
            return {
                place: i + 1,
                warrior,
            }
        });
        res.render('hall-of-fame/list', {
            warriors
        });
    })
