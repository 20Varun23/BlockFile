
import { type FolderDataType } from "../helpers/DataTypes/FolderDataType";
import { type FileDataType } from "../helpers/DataTypes/FileDataType";

export const mockFolderData:Record<string,FolderDataType> = {
    "root":{
        id:"root",
        name: "Report", 
        subfolders:["f2","f3"],
        files: ["file1","file2"]
      },
    "f2":{
        id: "f2",
        name: "Testing",
        subfolders: ["f3"],
        files: []
      }, 
    "f3":{
        id: "f3",
        name: "Resting",
        subfolders: [],
        files: []
      }
}

export const mockFileData:Record<string,FileDataType> = {
  "file1":{
    id: "file1",
    name: "Why so serious?",
    path: "here",
    content: "asdjfhasdkj" ,
    owner: "user1"
  },
  "file2":{
    id: "file2",
    name: "Dexter",
    path: "there",
    content: "asdjfhasdkj",
    owner: "user2"
  }
}