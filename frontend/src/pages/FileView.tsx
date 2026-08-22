import { useParams } from "react-router-dom";
import { type FileDataType } from "../helpers/DataTypes/FileDataType";
import { useEffect, useState } from "react";
import { fileFetch } from "../helpers/fetchFile";
import styles from "./styles/FileView.module.css";


function FileView(){
    const {profileId, fileId} = useParams<{profileId:string, fileId?: string}>(); // TODO: add logic later here 
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<FileDataType | null>(null);
    const [content, setContent] = useState("");

        if(!profileId){
            return <>Invalid Profile</>
        }
        
        if(!fileId){
            return <>Invalid File</>
        }

        // TODO: Make Async
        // TODO: make the button diabled if input not changed
        // TODO: Make the submit function (Async)
        useEffect(()=>{
        try{
            const fileData = fileFetch(fileId);
            console.log(fileData);
            setFile(fileData);
            setContent(fileData.content ?? " ");
        }catch(error){
            console.error(error);
        }finally{
            setIsLoading(true);
        }
    },[fileId]);    

        return (
          <div className="flex flex-col align-center">
            <h1>{file?.name}</h1>
            <h4 className="text-amber-200">Folder Id: {file?.id}</h4>
            <h4 className="text-amber-200">Owner: {file?.owner}</h4>
            <form action="" className="flex flex-col">
              <textarea
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
                className={styles.fileContent}
              ></textarea>
              <button className="primary-btn p-2 self-center mt-2">Save</button>
            </form>
          </div>
        );
}

export default FileView;