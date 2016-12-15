import {ISearchable} from "../assets/search";

export interface IRecipient extends ISearchable{
    name: string;
    surname: string;
    diagnose: string;
   // city:string;
   // group: number;
   // rhesus:string;
    status: string;
    acceptedColor:string;
}