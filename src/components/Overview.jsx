import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useLoaderData } from "react-router-dom";
import RatingChart from "./RatingChart";

// pages/Dashboard/Overview.jsx
const Overview = () => {
     const [watchlists,setWatchlists]=useState([]);
     const [reviews,setReviews]=useState([]);
     const [highestreviews,setHighestreviews]=useState([]);
     const [avgRating, setAvgRating] = useState(0);
        const{user}=useContext(AuthContext);
        fetch(`https://chill-gaming-server.vercel.app/user-watchlist/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setWatchlists(data))
        // const reviews=useLoaderData();
         fetch(`https://chill-gaming-server.vercel.app/user-reviews/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setReviews(data);
        const total = data.reduce((sum, item) => sum + Number(item.rating || 0), 0); 
        const average = data.length > 0 ? (total / data.length).toFixed(1) : 0;
        setAvgRating(average);
        const highest = data.reduce((max, reviews) => {
        const currentRating = Number(reviews.rating);
        return currentRating > Number(max.rating) ? reviews : max;
      }, data[0]);
      setHighestreviews(highest)
    
    }
    )
        
        
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value text-primary">{reviews.length}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Games in Watchlist</div>
            <div className="stat-value text-secondary">{watchlists.length}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Avg Rating</div>
            <div className="stat-value text-accent">{avgRating}</div>
          </div>
        </div>
      </div>

      {highestreviews && (
  <div className="card bg-base-100 shadow-lg p-5">
    <h3 className="text-xl font-bold mb-2"> Highest Rated Game</h3>
    <p className="text-lg font-semibold">{highestreviews.gamename}</p>
    <p className="text-sm text-gray-500">Rating: {highestreviews.rating} ⭐</p>
    <p className="text-sm">{highestreviews.review?.slice(0, 80)}...</p>
  </div>
)}
<RatingChart reviews={reviews} />
    </div>
  );
};

export default Overview;
