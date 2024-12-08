
import { Link } from 'react-router-dom';

const Myreview = ({mr}) => {
    const {_id,gamename,review,genres,rating}=mr;
    const handledelete=(id)=>{
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });

                    // update the loaded coffee state
                    // const remainingCoffees = loadedCoffees.filter(coffee => coffee._id !== _id);
                    // setLoadedCoffees(remainingCoffees);
                    console.log("deleted");

                }
            })
    }
    return (
        <tr>
       
        <td>{gamename}</td>
        <td>{review}</td>
        <td>{genres}</td>
        <td>{rating}</td>
        <td><Link to={`/updateReview/${_id}`}><button type="btn" className="btn">Update</button></Link></td>
        <td><button type="btn" className="btn" onClick={()=>handledelete(_id)}>Delete</button></td>
        

        
      </tr>
    );
};

export default Myreview;