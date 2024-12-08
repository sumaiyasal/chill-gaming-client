
import { Link } from 'react-router-dom';

const Myreview = ({mr}) => {
    const {_id,gamename,review,genres,rating}=mr;
    return (
        <tr>
       
        <td>{gamename}</td>
        <td>{review}</td>
        <td>{genres}</td>
        <td>{rating}</td>
        <td><Link to={`/updateReview/:${_id}`}><button type="btn" className="btn">Update</button></Link></td>
        <td><button type="btn" className="btn">Delete</button></td>
        

        
      </tr>
    );
};

export default Myreview;