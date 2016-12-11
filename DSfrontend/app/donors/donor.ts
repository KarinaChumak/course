import {IUser} from "../auth/admin";
export interface IDonor extends IUser{
    name:string;
    surname: string;
    patronymic : string;
    birthdate: string;
    city: string;
    available: boolean;
    group: number;
    rhesus: string;
    donations: Array<string>;
}