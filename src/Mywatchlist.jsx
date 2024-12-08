import { useContext, useState } from "react";
import { AuthContext } from "./components/AuthProvider";


const Mywatchlist = () => {
    const [watchlists,setWatchlists]=useState([]);
    const{user}=useContext(AuthContext);
    fetch(`http://localhost:5000/user-watchlist/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setWatchlists(data))
    // console.log(watchlists);
    return (
        <div className="container mx-auto">
         <h1 className="text-center text-4xl py-16 font-extrabold">My WatchList</h1>
         <table className="table table-zebra">

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
    );
};

export default Mywatchlist;