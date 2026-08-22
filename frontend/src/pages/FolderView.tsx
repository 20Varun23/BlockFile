import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { folderFetch } from "../helpers/fetchFolder";
import { type FolderDataType } from "../helpers/DataTypes/FolderDataType";
import FolderNode from "../components/FolderNode";
import FileNode from "../components/FileNode";

function FolderView(){
    const {profileId, folderId="root"} = useParams<{profileId:string, folderId?: string}>(); // TODO: add logic later here 
    const [contentLoadCalled, setContentLoadCalled] = useState(false);
    const [content, setContent] = useState<FolderDataType | null>(null);

    useEffect(()=>{
        try{
            const folderData = folderFetch(folderId);
            console.log(folderData);
            setContent(folderData);
        }catch(error){
            console.error(error);
        }finally{
            setContentLoadCalled(true);
        }
    },[folderId]);    

    if(!profileId){
        return <h1>Invalid Profile</h1>
    }

    if(contentLoadCalled && content===null){
        return (    
            <h1>Error while collecting data</h1>
        )
    }

    return(
        <div className="flex flex-col align-center text-white">
            <h1>{content?.name}</h1>
            <h4 className="text-amber-200">Folder Id: {content?.id}</h4>
            <div className="grid grid-cols-4 gap-3 max-w-[50vw] self-center p-3">
                {
                        content?.subfolders.map(
                            (el:string)=>{
                                return <FolderNode id={el} profileId={profileId}/>
                            }
                        )
                }
                {
                        content?.files.map(
                            (el:string)=>{
                                return <FileNode id={el} profileId={profileId}/>
                            }
                        )
                }
            </div>
        </div>
    )    
}

export default FolderView