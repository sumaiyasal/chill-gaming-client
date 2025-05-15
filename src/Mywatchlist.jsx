import { useContext, useState } from "react";
import { AuthContext } from "./components/AuthProvider";


const Mywatchlist = () => {
    const [watchlists,setWatchlists]=useState([]);
    const{user}=useContext(AuthContext);
    fetch(`https://chill-gaming-server.vercel.app
/user-watchlist/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setWatchlists(data))
    // console.log(watchlists);
    return (
       <div className="mt-10 bg-white text-black dark:bg-gray-800 dark:text-white">
         <div className="container mx-auto  min-h-screen">
         <h1 className="text-center text-4xl py-16 font-extrabold">My WatchList</h1>
         <table className="table ">

    <thead className=" text-black dark: dark:text-white text-lg">
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