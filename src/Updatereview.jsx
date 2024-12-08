import { useContext } from "react";
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./components/AuthProvider";


const Updatereview = () => {
    const {user} = useContext(AuthContext);
    const reviews=useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const{gameimage,gamename,genres,publishingyear,rating,review,_id}=reviews
    console.log(reviews);
    const handleupdatesubmit=(e)=>{
        e.preventDefault();
        
        const gameimage=e.target.photo.value;
        const gamename=e.target.gamename.value;
        const review=e.target.description.value;
        const rating=e.target.rating.value;
        const publishingyear=e.target.publishyear.value;
        const genres=e.target.genres.value;
        const email=e.target.email.value;
        const displayName = e.target.name.value;
        
         const newreview={gameimage,gamename,review,rating,publishingyear,genres,email,displayName}
         fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newreview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log('successfully updated');
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Coffee updated successfully',
                    //     icon: 'success',
                    //     confirmButtonText: 'Ok'
                    // });
                    e.target.reset();
                    
                }

navigate(location?.state ? location.stats : "/myReviews");
            })
        
       

    }
    return (
        <div className="container mx-auto ">
           <h1 className="text-center">Update Review</h1> 
           <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
         
          <form onSubmit={handleupdatesubmit} className="card-body border-2 p-4 rounded-lg my-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Cover Image</span>
              </label>
              <input
              type="text"
              name="photo"
             
              placeholder="photo-url"
              className="input input-bordered"
              defaultValue={gameimage}
              required
            />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Name</span>
              </label>
              <input
              name="gamename"
              type="text"
              defaultValue={gamename}
              placeholder="name"
              className="input input-bordered"
              required
            />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Description</span>
              </label>
              <textarea
              name="description"
             placeholder="Enter your review"
             className="input input-bordered"
             defaultValue={review}
               required
              ></textarea>
            </div>
 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
              name="rating"
              type="number"
              placeholder="rating"
              defaultValue={rating}
              className="input input-bordered"
               min="1"
               max="5"
              required
            />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Publish Year</span>
              </label>
              <input
              name="publishyear"
              type="number"
             defaultValue={publishingyear}
              placeholder="publish year"
              className="input input-bordered"
               min="1990"
               max={new Date().getFullYear()}
              required
            />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select  
              name="genres"
              defaultValue={genres}
              placeholder="genres"
              className="input input-bordered"
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
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              defaultValue={user.email} 
            readOnly
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              defaultValue={user.displayName} 
            readOnly
              className="input input-bordered"
              required
            />
          </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-xl mb-2">Submit</button>
              
            </div>
          </form>
     
        </div>
      </div>
        </div>
    );
};

export default Updatereview;