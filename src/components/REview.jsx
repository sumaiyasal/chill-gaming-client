import { Link } from "react-router-dom";


const REview = ({review}) => {
    const {gameimage,gamename,rating,publishingyear,_id}=review;
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={gameimage} className="w-[300px] h-[300px] pt-10"
      alt="Shoes" />
  </figure>
  <div className="card-body pl-16">
    <h2 className="card-title">{gamename}</h2>
    <p className="text-xl">{rating} <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>
    <p>Publish in {publishingyear}</p>
    <div className="card-actions justify-end">
        <Link to={`/allreviews/${_id}`}><button className="btn btn-primary">Explore Details</button></Link>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default REview;