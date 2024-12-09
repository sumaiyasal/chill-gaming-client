import { useContext,  useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';

const Login = () => {
  const {signInUser,setUser,loginwithgoogle,setEmail } = useContext(AuthContext);
  const [email, setEmailInput] = useState('');
  const[error,setError]=useState({});
  
  const location = useLocation();

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    loginwithgoogle()
        .then(result => {
            setUser(result.user);
            Swal.fire({
              title: 'Success!',
              text: 'Successfully Logged In',
              icon: 'success',
              confirmButtonText: 'Ok'
          });
            navigate(location?.state ? location.state : "/");
        })
        .catch((errorr) => {
            setError({ ...error, login: errorr.code });
          });
}

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          const lastSignInTime = result?.user?.metadata?.lastSignInTime;
          const loginInfo = { email, lastSignInTime };

          fetch(`chill-gaming-server-48g4fkiq0-sumaiya-s-projects-efb56ee6.vercel.app
/users`, {
              method: 'PATCH',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(loginInfo)
          })
              .then(res => res.json())
              .then(data => {
                  console.log('sign in info updated in db', data);
                  Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logged In',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });

              })
          navigate(location?.state ? location.state : "/");
        })
        .catch((errorr) => {
          setError({ ...error, login: errorr.code });
        });
    }
    return (
     <div className="bg-white dark:bg-gray-800">
         <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-4xl py-16 font-extrabold text-center">
            Login your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body border-2 p-4 rounded-lg my-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) => setEmailInput(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )}
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-xl mb-2">Login</button>
              <button className="btn bg-[#3ea5e0] rounded-xl text-white" onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
      
          </form>
         
          <p className="text-center font-semibold">
            Dont't Have An Account ?{" "}
            <Link className="text-red-500" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
       
      </div>
      
     </div>
    );
};

export default Login;