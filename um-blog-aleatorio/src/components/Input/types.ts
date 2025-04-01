import { Dispatch, FormEvent, SetStateAction } from "react";

export interface IInput{
    placeholder: string;
    state:string;
    setState:Dispatch<SetStateAction<string>>;
    handleSearch(evt:FormEvent):Promise<void>;
}