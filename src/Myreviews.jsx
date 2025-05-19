import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./components/AuthProvider";
import Myreview from "./Myreview";

const Myreviews = () => {
  const [myreviews, setMyreviews] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gaming-server.vercel.app/user-reviews/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyreviews(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div className="pt-20 pb-20 bg-white dark:bg-[#161a1d] min-h-screen text-black dark:text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Reviews</h1>

        {loading ? (
          <div className="text-center text-lg">Loading reviews...</div>
        ) : myreviews.length === 0 ? (
          <div className="text-center text-lg font-medium">You haven't added any reviews yet.</div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border dark:border-gray-700">
            <table className="table w-full">
              <thead className="bg-gray-200 dark:bg-gray-700 text-lg text-black dark:text-white">
                <tr>
                  <th className="p-4">Game Name</th>
                  <th className="p-4">Review</th>
                  <th className="p-4">Genre</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {myreviews.map((mr) => (
                  <Myreview key={mr._id} mr={mr} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myreviews;
