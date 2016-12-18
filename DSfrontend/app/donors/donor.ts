
import {ISearchable} from "../assets/search";

export interface IDonor extends ISearchable{
    name:string;
    surname: string;
    patronymic : string;
    birthdate: string;
    email:string;
    donations: Array<string>;
    avatar:string;
}