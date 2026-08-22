// TODO: remove these later
import { mockFolderData } from "../mock/data";
import { type FolderDataType } from "./DataTypes/FolderDataType";

export function folderFetch(id:string):FolderDataType{
  return mockFolderData[id];
}

export function folderNameFetch(id:string):string{
  return mockFolderData[id].name;
}
