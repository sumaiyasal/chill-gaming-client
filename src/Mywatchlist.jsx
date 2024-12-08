import { useLoaderData } from "react-router-dom";


const Mywatchlist = () => {
    const watchlists=useLoaderData();
    console.log(watchlists);
    return (
        <div className="container mx-auto">
         <h1 className="text-center">My WatchList</h1>
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