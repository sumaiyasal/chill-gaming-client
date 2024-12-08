
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Myreview = ({mr}) => {
    const {_id,gamename,review,genres,rating}=mr;
    const handledelete=(id)=>{
        fetch(`https://chill-gaming-server-huxylss3m-sumaiya-s-projects-efb56ee6.vercel.app/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                    
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
        <td><Link to={`/updateReview/${_id}`}><button type="btn" className="btn bg-lime-300">Update</button></Link></td>
        <td><button type="btn" className="btn bg-red-300" onClick={()=>handledelete(_id)}>Delete</button></td>
        

        
      </tr>
    );
};

export default Myreview;