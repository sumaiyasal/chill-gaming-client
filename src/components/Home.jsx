import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => { 
  const[highestreview,setHighestreview]=useState([]);
  fetch('https://chill-gaming-server.vercel.app/highestreviews')
  .then(res=>res.json())
  .then(data=>setHighestreview(data))
  const { isDarkMode, toggleTheme } =useContext(AuthContext);
    return (
    
       <div className="p-2 bg-white text-black dark:bg-gray-800 dark:text-white">
         <div className="container mx-auto ">
            <section className="mt-16 h-96">
            <div className="carousel w-full h-full rounded-xl ">
  <div id="slide1" className="carousel-item relative  w-full">
    <img
      src="https://greencade.com/wp-content/uploads/2024/08/maxresdefault-58.png" className="w-full h-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.pcmag.com/imagery/articles/00cWlLBJjuFKgERF0Ep5Owu-1..v1648045633.jpg"
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://www.gameuidatabase.com/uploads/Clash-of-Clans12282021-110944-88753.jpg"
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.blackflix.com/wp-content/uploads/pubgmobile_1200x76811.jpeg"
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </section>
            {/* <button onClick={toggleTheme} >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button> */}
            <section className="py-32">
              
              <h1 className="text-center text-5xl font-extrabold ">Highest Rated Game</h1>
              <div className="grid lg:grid-cols-4 pt-20 grid-cols-1 gap-8  text-black">
            {highestreview.map(hreview=>
             <div>
             <div className="card bg-base-100 w-80 border-2 rounded-xl">
    <figure>
      <img
        src={hreview.gameimage} className="w-[250px] h-[250px] pt-10 "
        alt="Shoes" />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{hreview.gamename}</h2>
      <p className="text-xl">{hreview.rating} <div className="rating">
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
      <p>Publish in {hreview.publishingyear}</p>
      <div className="card-actions ">
          <Link to={`/allreviews/${hreview._id}`}><button className="btn bg-orange-400 hover:bg-orange-200">Explore Details</button></Link>
        
      </div>
    </div>
  </div> 
          </div>

            )}
            </div>
            </section>

           <section className="pb-20">
            <h1 className=" text-center text-5xl p-20 font-extrabold ">Upcoming Games {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['2025!!', 'Releases', 'Schedules' ]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={400}
            
          />
        </span>

            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 text-black">
            <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src='https://cdn.mos.cms.futurecdn.net/JpJvUphK4f5S36NNBkuTPS-200-100.jpg' className="w-[300px] h-[300px] pt-10"
        alt="Shoes" />
    </figure>
    <div className="card-body pl-16">
      <h2 className="card-title">Doom: The Dark Ages </h2>
      <h3>The next part of one of the most influential FPS series is yanking Doom guy back to a grim fantasy medieval-like prequel setting in The Dark Ages. With any luck, this will be the third great Doom game in a decade.</h3>
      <p>Launching in 2025</p>
     
    </div>
            </div> 

            <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src='https://cdn.mos.cms.futurecdn.net/jixRRC9sAjfg9NqDbVyqmT-200-100.jpg' className="w-[300px] h-[300px] pt-10"
        alt="Shoes" />
    </figure>
    <div className="card-body pl-16">
      <h2 className="card-title">Assassin's Creed Shadows </h2>
      <h3>Assassin's Creed is finally headed to Japan and will continue the series' journey back to its roots. Unlike the open world action Creed games of the past several years, Shadows is following after Mirage by prioritizing stealth again.</h3>
      <p>Launching in Feb 14,2025</p>
     
    </div>
            </div> 

            <div className="card bg-base-100 w-96 shadow-xl ">
    <figure>
      <img
        src='https://cdn.mos.cms.futurecdn.net/e3Lxiobjo2njecKMA2xGyY-200-100.jpg' className="w-[300px] h-[300px] pt-10"
        alt="Shoes" />
    </figure>
    <div className="card-body pl-16">
      <h2 className="card-title">Monster Hunter Wilds </h2>
      <h3>Wilds looks like it may be the cherry on top of a several year run of great Monster Hunter games. It looks like the evolution from Monster Hunter World that we were hoping for with a more responsive, simulated open world of monsters to hunt.</h3>
      <p>Launching in Feb 14,2025</p>
     
    </div>
            </div> 

            </div>
           </section>
             
            <section>
            <div className=" border-2 md:mx-48 flex flex-col items-center justify-center my-40 py-20 space-y-10 rounded-xl bg-white">
    <h1 className='text-4xl font-bold text-black '>Subscribe to our newsletter!!</h1>
   <div className="flex items-center gap-4">
   <input
  type="email"
  placeholder="Your Email Address"
  className="input input-bordered  w-full " />
    <button className="btn bg-blue-300">Subscribe</button>
   </div>
</div>
            </section>
          
        </div>
       </div>

    );
};

export default Home;