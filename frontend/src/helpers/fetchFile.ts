// TODO: add logic here

import { mockFileData } from "../mock/data";
import { type FileDataType } from "./DataTypes/FileDataType";

export function fileFetch(id:string):FileDataType{
    return mockFileData[id];
}   

export function fileNameFetch(id: string){
    return mockFileData[id].name;
}