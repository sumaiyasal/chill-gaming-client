import { Link } from "react-router-dom";


const REview = ({review}) => {
    const {gameimage,gamename,rating,publishingyear,_id}=review;
    return (
        <div>
           <div className="card  lg:w-72 w-96 border-2 rounded-xl transition ease-in-out   hover:animate-pulse bg-base-200">
  <figure>
    <img
      src={gameimage} className="lg:w-[200px] lg:h-[200px]  w-[300px] h-[300px] pt-10 "
      alt="Shoes" />
  </figure>
  <div className="card-body pl-10 ">
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
    <div className="card-actions ">
        <Link to={`/allreviews/${_id}`}><button className="bg-orange-400 hover:bg-orange-200 btn ">Explore Details</button></Link>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default REview;