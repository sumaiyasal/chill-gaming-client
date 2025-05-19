import { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./components/AuthProvider";

const Sreview = () => {
  const {
    _id,
    gameimage,
    gamename,
    review,
    rating,
    publishingyear,
    genres,
    email,
    displayName,
  } = useLoaderData();

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const uemail = user?.email;
  const watchlist = {
    gameimage,
    gamename,
    review,
    rating,
    publishingyear,
    genres,
    uemail,
  };

  const handleWatch = (wdata) => {
    fetch("https://chill-gaming-server.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
        }
        navigate(location?.state || "/myWatchlist");
      });
  };

  return (
    <div className="bg-white dark:bg-[#161a1d] pt-28 pb-8">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-200 text-black rounded-lg p-8 items-center">
          <div className="border-4 rounded-lg overflow-hidden ">
            <img
              src={gameimage}
              alt={gamename}
              className="w-[300px] h-[300px] "
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{gamename}</h1>

            <p className="text-base">{review}</p>

            <div>
              <p className="text-lg font-semibold">Rating: {rating}</p>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((num) => (
                  <input
                    key={num}
                    type="radio"
                    name="rating-stars"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={num === Math.round(rating)}
                    readOnly
                  />
                ))}
              </div>
            </div>

            <p className="text-base">Published in {publishingyear}</p>
            <p className="text-base capitalize">Genre: {genres}</p>

            <div className="text-base">
              <p>
                Reviewed by: <span className="font-semibold">{displayName}</span>
              </p>
              <p>Email: {email}</p>
            </div>

            {user ? (
              <button
                className="btn btn-primary mt-4"
                onClick={() => handleWatch(watchlist)}
              >
                Add to Watchlist
              </button>
            ) : (
              <p className="text-red-600 font-medium">Login to add to watchlist.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sreview;
