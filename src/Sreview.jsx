import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./components/AuthProvider";


const Sreview = () => {
    const{_id,gameimage,gamename,review,rating,publishingyear,genres,email,displayName}=useLoaderData();
    const{user}=useContext(AuthContext);
    const uname=user.displayName;
    const uemail=user.email;
    const watchlist={gameimage,gamename,review,rating,publishingyear,genres,uname,uemail};
    const handlewatch=(wdata)=>{
        fetch('http://localhost:5000/watchlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                }
            })
    }
    return (
        <div className="w-[80%] mx-auto">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-24 justify-between items-center ">
    <div className="border-4">
    <img
      src={gameimage}
      className="max-w-lg rounded-lg shadow-2xl " />
    </div>
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{gamename}</h1>
      <p className="">
        {review}
      </p>
      <p className="">
        {rating}<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      </p>
      <p>
        Published in {publishingyear}
      </p>
      <p>
        genres : {genres}
      </p>
      <p>Reviewd by : {displayName}
      <p>{email}</p>
      </p>
     
      <button className={user?`btn btn-primary visble`:`btn btn-primary hidden` }  onClick={()=>handlewatch(watchlist)}>Add to Watchlist</button>
    </div>
  </div>
</div>
             
            </div>
            
       
    );
};

export default Sreview;