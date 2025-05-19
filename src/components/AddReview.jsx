import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import picc from "../assets/Animation - 1747306446802.json";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleformsubmit = (e) => {
    e.preventDefault();
    const gameimage = e.target.photo.value;
    const gamename = e.target.gamename.value;
    const review = e.target.description.value;
    const rating = e.target.rating.value;
    const publishingyear = e.target.publishyear.value;
    const genres = e.target.genres.value;
    const email = e.target.email.value;
    const displayName = e.target.name.value;

    const newreview = {
      gameimage,
      gamename,
      review,
      rating,
      publishingyear,
      genres,
      email,
      displayName,
    };

    fetch("https://chill-gaming-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newreview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
          e.target.reset();
        }
        navigate(location?.state || "/myReviews");
      });
  };

  return (
    <div className="pt-16 bg-white text-black dark:bg-[#161a1d] dark:text-white pb-10 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl pt-10 font-extrabold">Add Review</h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10 mt-10">
          {/* Animation - Hidden on small devices */}
          <div className="hidden lg:block">
            <Lottie animationData={picc} className="w-full" />
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <div className="card bg-slate-100 text-black w-full max-w-lg rounded-lg shadow-md">
              <form
                onSubmit={handleformsubmit}
                className="card-body border-2 p-4 rounded-lg space-y-4"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Game Cover Image</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Game Name</span>
                  </label>
                  <input
                    name="gamename"
                    type="text"
                    placeholder="Game Name"
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Game Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter your review"
                    className="textarea textarea-bordered bg-white shadow-xl"
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Rating</span>
                  </label>
                  <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    placeholder="1 - 5"
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Publish Year</span>
                  </label>
                  <input
                    name="publishyear"
                    type="number"
                    min="1990"
                    max={new Date().getFullYear()}
                    placeholder="Publish Year"
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Genres</span>
                  </label>
                  <select
                    name="genres"
                    className="select select-bordered bg-white shadow-xl"
                    required
                  >
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="RPG">RPG</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={user.email}
                    readOnly
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={user.displayName}
                    readOnly
                    className="input input-bordered bg-white shadow-xl"
                    required
                  />
                </div>

                <div className="form-control mt-4">
                  <button className="btn bg-red-500 hover:bg-red-600 text-white border-0 rounded-xl">
                    Add Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
