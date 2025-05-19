import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./components/AuthProvider";

const Mywatchlist = () => {
  const [watchlists, setWatchlists] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gaming-server.vercel.app/user-watchlist/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setWatchlists(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div className="mt-10 bg-white text-black dark:bg-[#161a1d] dark:text-white">
      <div className="container mx-auto min-h-screen px-4">
        <h1 className="text-center text-4xl font-extrabold py-16">My Watchlist</h1>

        {loading ? (
          <div className="text-center text-lg">Loading your watchlist...</div>
        ) : watchlists.length === 0 ? (
          <div className="text-center text-lg font-medium">You haven't added any games to your watchlist yet.</div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border dark:border-gray-700">
            <table className="table w-full">
              <thead className="bg-gray-200 dark:bg-gray-700 text-lg text-black dark:text-white">
                <tr>
                  <th className="p-4">Game Name</th>
                  <th className="p-4">Review</th>
                  <th className="p-4">Genre</th>
                  <th className="p-4">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {watchlists.map((wcl) => (
                  <tr key={wcl._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                    <td className="p-4 font-semibold">{wcl.gamename}</td>
                    <td className="p-4 max-w-sm truncate">{wcl.review}</td>
                    <td className="p-4">{wcl.genres}</td>
                    <td className="p-4 font-bold">{wcl.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mywatchlist;
