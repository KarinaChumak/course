import {ISearchable} from "../assets/search";

export interface IRecipient extends ISearchable{
    name: string;
    surname: string;
    diagnose: string;
    avatar: string;
    email: string;
    status: string;
    acceptedColor:string;
}