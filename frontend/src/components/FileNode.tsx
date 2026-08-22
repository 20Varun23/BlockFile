import { Link } from "react-router-dom";
import styles from "./Node.module.css";
import { fileNameFetch } from "../helpers/fetchFile";

//TODO: Finish this
function FileNode({id,profileId}:{id:string, profileId: string}){
    return(
        <Link to={`/profile/${profileId}/file/${id}`} className={styles.fileNode}>
            {fileNameFetch(id)}
        </Link>
    )
}

export default FileNode;