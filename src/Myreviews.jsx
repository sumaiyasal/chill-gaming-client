import { useContext, useState } from "react";
import { AuthContext } from "./components/AuthProvider";
import Myreview from "./Myreview";


const Myreviews = () => {
    const [myreviews,setMyreviews]=useState([]);
    const{user}=useContext(AuthContext)
    fetch(`http://localhost:5000/user-reviews/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyreviews(data))

    return (
        <div className="container mx-auto">
         <h1 className="text-center">My Reviews:{myreviews.length}</h1>
         <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
       
        <th>Gamename</th>
        <th>Review</th>
        <th>Genres</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
         {
            myreviews.map(mr=><Myreview mr={mr}></Myreview>)
         }  
         </tbody> 
         </table>
        </div>
    );
};

export default Myreviews;