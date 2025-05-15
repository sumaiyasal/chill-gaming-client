import { useLoaderData } from "react-router-dom";
import REview from "./REview";
import { useState } from "react";

const Allreviews = () => {
    const reviews=useLoaderData();

    const [sortedReviews, setSortedReviews] = useState(reviews);
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [selectedGenre, setSelectedGenre] = useState('all');
const[criterias,setCriterias]=useState(reviews);
let Array = [...reviews];
  

  const sortReviews = (criteria) => {
    let sortedArray = [...Array];

    if (criteria === 'rating') {
      sortedArray.sort((a, b) => a.rating - b.rating);
    } 
    else if (criteria === 'publishingyear') {
      sortedArray.sort((a, b) => a.publishingyear - b.publishingyear);
    } 
    setCriterias(sortedArray);
};



const handleSortChange = (event) => {
  const selectedCriteria = event.target.value;
  setSortCriteria(selectedCriteria);
  sortReviews(selectedCriteria);
};
const handlefilter=(event)=>{
const genre=event.target.value;
setSelectedGenre(genre);

 
    let filterArray=[...reviews];
    if(genre === 'all')
    {
        setCriterias(reviews);
           
    }
    else
    {
       const filterdarr=filterArray.filter(review => review.genres === genre);
       setCriterias(filterdarr);
    
    }
    
}


    return (
         <div className=" mt-10 bg-white text-black dark:bg-gray-800 dark:text-white">
                <div className="container mx-auto ">
            <h1 className="text-center text-4xl py-16 font-extrabold ">All reviews</h1>
            <div className="sort-dropdown pb-10">
        <label>Sort by:</label>
        <select id="sortOptions" value={sortCriteria} onChange={handleSortChange} className="text-black">
          <option value="rating">Rating </option>
          <option value="publishingyear">Year</option>
  
        </select>
      </div>

      <div className="filter-dropdown pb-10">
        <label>Filter by:</label>
        <select id="filterOption" value={selectedGenre} onChange={handlefilter} className="text-black">
          <option value="all">All </option>
          <option value="Action">Action </option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Sports">Sports</option>
  
        </select>
      </div>
            <div className="grid grid-cols-3 gap-8 pb-10 text-black">
            {criterias.map(review=><REview key={review._id}
            review={review}
            ></REview>)}
            </div>
           
        </div>
         </div>
    
    );
};

export default Allreviews;