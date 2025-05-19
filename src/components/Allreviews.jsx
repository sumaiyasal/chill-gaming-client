import { useLoaderData } from "react-router-dom";
import REview from "./REview";
import { useState } from "react";

const Allreviews = () => {
  const reviews = useLoaderData();

  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [sortCriteria, setSortCriteria] = useState("rating");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const sortReviews = (criteria) => {
    const reviewsCopy = [...reviews];

    if (criteria === "rating") {
      reviewsCopy.sort((a, b) => a.rating - b.rating);
    } else if (criteria === "publishingyear") {
      reviewsCopy.sort((a, b) => a.publishingyear - b.publishingyear);
    }

    setFilteredReviews(reviewsCopy);
  };

  const handleSortChange = (event) => {
    const selected = event.target.value;
    setSortCriteria(selected);
    sortReviews(selected);
  };

  const handleFilter = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    if (genre === "all") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.genres === genre);
      setFilteredReviews(filtered);
    }
  };

  return (
    <div className="mt-10 bg-white text-black dark:bg-[#161a1d] dark:text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl py-10 font-extrabold">All Reviews</h1>

        <div className="flex flex-col md:flex-row justify-between gap-4 pb-6">
          <div className="sort-dropdown">
            <label className="mr-2 font-semibold">Sort by:</label>
            <select
              id="sortOptions"
              value={sortCriteria}
              onChange={handleSortChange}
              className="text-black px-2 py-1 rounded bg-white shadow-lg"
            >
              <option value="rating">Rating</option>
              <option value="publishingyear">Year</option>
            </select>
          </div>

          <div className="filter-dropdown">
            <label className="mr-2 font-semibold">Filter by:</label>
            <select
              id="filterOption"
              value={selectedGenre}
              onChange={handleFilter}
              className="text-black px-2 py-1 rounded bg-white shadow-lg"
            >
              <option value="all">All</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {filteredReviews.map((review) => (
            <REview key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allreviews;
