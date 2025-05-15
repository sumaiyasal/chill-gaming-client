import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css';
const Home = () => { 
  const game = {
  title: 'Hollow Knight: Silksong',
  description: 'An epic action-adventure through a vast, haunted kingdom. Silksong expands the original with new mechanics and environments.',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW_bAypISduMXh-QNecUxYP2svWKs_g-Bu-MQUXTpyYSsmAFYe2sXx5lmcBiW554a8EuYj',
  releaseDate: 'Coming July 2025',
  link: 'https://hollowknightsilksong.com/',
};
  const[highestreview,setHighestreview]=useState([]);
  fetch('https://chill-gaming-server.vercel.app/highestreviews')
  .then(res=>res.json())
  .then(data=>setHighestreview(data))
  const { isDarkMode, toggleTheme } =useContext(AuthContext);
 const newsList = [
  {
    title: 'Cyberpunk 2077 2.1 Patch Adds Metro System',
    date: 'May 14, 2025',
    summary: 'CDPR rolls out a major update including the long-awaited metro system, new gigs, and improved AI.',
    image: 'https://static.beebom.com/wp-content/uploads/2023/12/Cyberpunk-2077-update-2.1.jpg?resize=1200%2C720&quality=75&strip=all',
    link: 'https://beebom.com/cyberpunk-2077-update-2-1-metro-system-qol-changes/#:~:text=Cyberpunk%202077%20will%20be%20receiving,better%20bike%20combat%2C%20and%20more.'
  },
  {
    title: 'Elden Ring DLC “Shadow of the Erdtree” Launches June',
    date: 'May 12, 2025',
    summary: 'New bosses, regions, and lore — fans are hyped as FromSoftware reveals a release date.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778580/header.jpg?t=1744748042',
    link: 'https://en.bandainamcoent.eu/'
  },
  {
    title: 'GTA 6 Trailer Breaks Internet — 200M Views',
    date: 'May 10, 2025',
    summary: 'Rockstar’s reveal sets YouTube on fire with a cinematic teaser of Vice City’s return.',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2025/05/Jason_and_Lucia_02_With_Logos_landscape.jpg?crop=0px%2C8px%2C3840px%2C2148px&resize=681%2C383',
    link: 'https://www.hollywoodreporter.com/business/digital/grand-theft-auto-6-trailer-views-record-1236210396/'
  }
];

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
            <section className="py-12">
              
              <h2 className="text-center text-4xl font-extrabold ">Highest Rated Game</h2>
              <div className="grid lg:grid-cols-4  pt-20 grid-cols-1 gap-6  text-black pl-2 lg:pl-0 " >
            {highestreview.map(hreview=>
             <div>
             <div className="card bg-base-100 lg:w-72 w-96 border-2 rounded-xl transition ease-in-out   hover:animate-pulse ">
    <figure>
      <img
        src={hreview.gameimage} className="lg:w-[250px] lg:h-[250px]  w-[300px] h-[300px] pt-10 "
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
      <div className="card-actions  ">
          <Link to={`/allreviews/${hreview._id}`}><button className="btn bg-orange-400 hover:bg-orange-200 ">Explore Details</button></Link>
        
      </div>
    </div>
  </div> 
          </div>

            )}
            </div>
            </section>

           <section className="pb-10">
            <h2 className=" text-center text-4xl p-10 font-extrabold ">Upcoming Games {' '}
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

            </h2>
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
      <p>Launching in August 14,2025</p>
     
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
      <p>Launching in November 18,2025</p>
     
    </div>
            </div> 

            </div>
           </section>
              
              <section className=" mx-auto  py-12">
      <h2 className="text-4xl  font-extrabold mb-8 text-center">Trending News</h2>

      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {newsList.map((news, idx) => (
          <div key={idx} className="card bg-base-200 shadow hover:shadow-xl transition">
            <figure><img src={news.image} alt={news.title} className="h-48 w-full object-cover" /></figure>
            <div className="card-body">
              <h3 className="card-title">{news.title}</h3>
              <p className="text-sm text-gray-500">{news.date}</p>
              <p className="mt-2">{news.summary}</p>
              <div className="card-actions justify-end mt-4">
                <a href={news.link} className="btn btn-sm bg-orange-400 hover:bg-orange-200">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  <section className=" mx-auto ">
      <h2 className="text-4xl font-bold mb-6 text-center"> Game of the Week</h2>

      <div className="card lg:card-side bg-white shadow-xl">
        <figure className="">
          <img src={game.image} alt={game.title} className=" w-[60%] h-[60%] object-cover" />
        </figure>
        <div className="card-body ">
          <h3 className="card-title text-2xl">{game.title}</h3>
          <p className="text-gray-500 text-sm">{game.releaseDate}</p>
          <p className="">{game.description}</p>
          <div className="card-actions justify-end mt-4">
            <a href={game.link} className="btn  bg-orange-400 hover:bg-orange-200">Read Reviews</a>
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