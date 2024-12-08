import { useContext, useState } from "react";
import { AuthContext } from "./components/AuthProvider";


const Mywatchlist = () => {
    const [watchlists,setWatchlists]=useState([]);
    const{user}=useContext(AuthContext);
    fetch(`https://chill-gaming-server-huxylss3m-sumaiya-s-projects-efb56ee6.vercel.app/user-watchlist/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setWatchlists(data))
    // console.log(watchlists);
    return (
       <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
         <div className="container mx-auto mb-5 min-h-screen">
         <h1 className="text-center text-4xl py-16 font-extrabold">My WatchList</h1>
         <table className="table table-zebra text-black">

    <thead className="text-black">
      <tr>
       
        <th>Gamename</th>
        <th>Review</th>
        <th>Genres</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
         {
            watchlists.map(wcl=>
                <tr>
                <td>{wcl.gamename}</td>
                <td>{wcl.review}</td>
                <td>{wcl.genres}</td>
                <td>{wcl.rating}</td>

                
        
                
              </tr>
            )
         }  
         </tbody> 
         </table>
        </div>
       </div>
    );
};

export default Mywatchlist;