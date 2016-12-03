export interface IDonor{
    name:string;
    surname: string;
    patronymic : string;
    birthdate: string;
    email: string;
    password:string;
    city: string;
    available: boolean;
    group: number;
    rhesus: string;
    donations: Array<string>;
}