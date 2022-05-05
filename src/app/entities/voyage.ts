import { User } from "./user";

export class Voyage {
    id_voyage:number;
    destination:String;
    start_date:Date;
    finish_date:Date;
    schudle:string;
    user:User[];
}   
