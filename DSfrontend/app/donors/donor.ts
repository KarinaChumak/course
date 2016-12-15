
import {ISearchable} from "../assets/search";

export interface IDonor extends ISearchable{
    name:string;
    surname: string;
    patronymic : string;
    birthdate: string;
   // city: string;
    available: boolean;
    //group: number;
    //rhesus: string;
    donations: Array<string>;
}