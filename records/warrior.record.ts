import {ValidationError} from "../utils/errors";

export class WarriorRecord {
    public id?: string;
    public readonly name: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        const {id, name, power, stamina, defence, agility, wins} = obj;

        const sum = [power, stamina, defence, agility].reduce((prev, curr) => prev + curr, 0);

        if (sum !== 10){
            throw new ValidationError(`The sum of all stats must be 10. Currently it is ${sum}.`);
        }

        if (name.length < 3 && name.length > 50){
            throw new ValidationError(`Name must have from 3 to 50 signs. Currently it is ${name.length}.`);
        }

        this.id = id;
        this.name = name;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        this.wins = wins;
    }

    async insert(){

    }

    async update(){

    }

    static async getOne(id: string){

    }

    static async listAll(){

    }

    static async listTop(toCount: number){

    }
}