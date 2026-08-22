import { Link, useParams } from "react-router-dom";


// TODO: proper fetching
// TODO: protection of page from url access
function Profile(){

    const {profileId} = useParams<{profileId:string}>();

    return(
        <div className="flex flex-col">
            <h1>{profileId}</h1>
            <div className="primary-div w-4xl flex flex-col align-center">
                <table className="text-center">
                    <tr>
                        <td>User Id</td>
                        <td>adfiasdjflks</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>dlkfjasdlfk</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>sjkldhjflsd</td>
                    </tr>
                    <tr>
                        <td>Team Role</td>
                        <td>sdklfjsld</td>
                    </tr>
                    <tr>
                        <td>Organization</td>
                        <td>sdjkflsdkjfs</td>
                    </tr>
                </table>

                <Link to={`files`} className="primary-btn mt-3 p-2 self-center">
                    Access Files
                </Link>

            </div>
        </div>
    )

}

export default Profile; 