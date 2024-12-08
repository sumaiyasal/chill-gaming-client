import { useLoaderData } from "react-router-dom";
import REview from "./REview";

const Allreviews = () => {
    const reviews=useLoaderData();
    return (

        <div className="container mx-auto">
            <h1 className="text-center text-4xl py-16 font-extrabold">All reviews</h1>
            <div className="grid grid-cols-3 gap-8 pb-10">
            {reviews.map(review=><REview key={review._id}
            review={review}
            ></REview>)}
            </div>
           
        </div>
    );
};

export default Allreviews;