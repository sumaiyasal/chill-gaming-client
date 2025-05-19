import { Link } from "react-router-dom";

const REview = ({ review }) => {
  const { gameimage, gamename, rating, publishingyear, _id } = review;

  return (
    <div className="w-full max-w-xs mx-auto bg-slate-200 text-black rounded-xl border-2 transition hover:shadow-xl">
      <figure className="flex justify-center pt-6">
        <img
          src={gameimage}
          alt={gamename}
          className="w-48 h-48  rounded"
        />
      </figure>
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{gamename}</h2>

        <div className="mb-2">
          <p className="text-lg font-medium mb-1">Rating: {rating}</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <input
                key={num}
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={num === Math.round(rating)}
              />
            ))}
          </div>
        </div>

        <p className="mb-4">Published in {publishingyear}</p>

        <div className="text-center">
          <Link to={`/allreviews/${_id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default REview;
