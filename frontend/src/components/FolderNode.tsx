import { folderNameFetch } from "../helpers/fetchFolder";
import styles from "./Node.module.css";
import { Link } from "react-router-dom";

// TODO: Finish this
function FolderNode({id,profileId}:{id:string,profileId:string}){
    return(
        <Link to={`/profile/${profileId}/files/${id}`} className={styles.folderNode}>
            {folderNameFetch(id)}/
        </Link>
    )
}

export default FolderNode;