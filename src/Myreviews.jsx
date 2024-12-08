import { useContext, useState } from "react";
import { AuthContext } from "./components/AuthProvider";
import Myreview from "./Myreview";


const Myreviews = () => {
    const [myreviews,setMyreviews]=useState([]);
    const{user}=useContext(AuthContext)
    fetch(`https://chill-gaming-server-huxylss3m-sumaiya-s-projects-efb56ee6.vercel.app//user-reviews/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyreviews(data))

    return (
        <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto">
         <h1 className="text-center text-4xl py-16 font-extrabold">My Reviews</h1>
         <table className="table table-zebra text-black">
    {/* head */}
    <thead className="text-black" >
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
        </div>
    );
};

export default Myreviews;