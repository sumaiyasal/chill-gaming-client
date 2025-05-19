import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css';
import Marquee from 'react-fast-marquee';
import { toast } from 'react-hot-toast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // You can customize these
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://greencade.com/wp-content/uploads/2024/08/maxresdefault-58.png",
    "https://i.pcmag.com/imagery/articles/00cWlLBJjuFKgERF0Ep5Owu-1..v1648045633.jpg",
    "https://www.gameuidatabase.com/uploads/Clash-of-Clans12282021-110944-88753.jpg",
    "https://www.blackflix.com/wp-content/uploads/pubgmobile_1200x76811.jpeg",
  ];
   const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("You're subscribed, gamer! ");
  };
  const game = {
  title: 'Hollow Knight: Silksong',
  description: 'An epic action-adventure through a vast, haunted kingdom. Silksong expands the original with new mechanics and environments.',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW_bAypISduMXh-QNecUxYP2svWKs_g-Bu-MQUXTpyYSsmAFYe2sXx5lmcBiW554a8EuYj',
  releaseDate: 'Coming July 2025',
  link: 'https://hollowknightsilksong.com/',
};
const testimonials = [
  "🎮 “Best platform to find and rate indie games!” – PixelPal",
  "🕹️ “Love the UI and the watchlist feature!” – NoobMaster420",
  "⭐ “Feels like Steam, but cooler!” – GamerChickX",
  "💡 “Highly recommend to all gamers.” – XPHunter",
];
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
    
       <div className="p-2 bg-white text-black dark:bg-[#161a1d] dark:text-white">
         <div className="container mx-auto ">
              <section className="pt-20 relative w-full">
      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-[500px]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>

            {/* <button onClick={toggleTheme} >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button> */}
            <section className="py-12 px-4">
  <h2 className="text-center text-4xl font-extrabold mb-12">Highest Rated Game</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {highestreview.map((hreview) => (
      <div key={hreview._id} className="flex justify-center">
        <div className="card w-full max-w-xs border-2 rounded-xl transition ease-in-out hover:animate-pulse  bg-slate-200 text-black">
          <figure className="px-4 pt-6">
            <img
              src={hreview.gameimage}
              alt={hreview.gamename}
              className="w-[200px] h-[200px] rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{hreview.gamename}</h2>
            <div className="text-xl flex items-center gap-2 text-black">
              {hreview.rating}
              <div className="rating">
                <input type="radio" name={`rating-${hreview._id}`} className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name={`rating-${hreview._id}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name={`rating-${hreview._id}`} className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name={`rating-${hreview._id}`} className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name={`rating-${hreview._id}`} className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <p>Published in {hreview.publishingyear}</p>
            <div className="card-actions">
              <Link to={`/allreviews/${hreview._id}`}>
                <button className="btn bg-red-500 text-white hover:bg-red-600">Explore Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


          <section className="pb-10 px-4">
  <h2 className="text-center lg:text-4xl md:text-3xl p-10 font-extrabold">
    Upcoming Games{' '}
    <span style={{ color: 'red', fontWeight: 'bold' }}>
      <Typewriter
        words={['2025!!', 'Releases', 'Schedules']}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={400}
      />
    </span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
    <div className="card bg-white text-black w-full max-w-md mx-auto shadow-md shadow-red-300">
      <figure className="px-4 pt-6">
        <div className="w-full h-60 overflow-hidden rounded">
          <img
            src="https://cdn.mos.cms.futurecdn.net/JpJvUphK4f5S36NNBkuTPS-200-100.jpg"
            className="w-full h-full "
            alt="Doom"
          />
        </div>
      </figure>
      <div className="card-body px-6 pb-6">
        <h2 className="card-title">Doom: The Dark Ages</h2>
        <h3 className="text-sm">
          The next part of one of the most influential FPS series is yanking Doom guy back to a grim fantasy medieval-like prequel setting in The Dark Ages. With any luck, this will be the third great Doom game in a decade.
        </h3>
        <p className="text-sm font-semibold mt-2">Launching in 2025</p>
      </div>
    </div>

   
    <div className="card bg-white text-black w-full max-w-md mx-auto shadow-md shadow-red-300">
      <figure className="px-4 pt-6">
        <div className="w-full h-60 overflow-hidden rounded">
          <img
            src="https://cdn.mos.cms.futurecdn.net/jixRRC9sAjfg9NqDbVyqmT-200-100.jpg"
            className="w-full h-full "
            alt="AC Shadows"
          />
        </div>
      </figure>
      <div className="card-body px-6 pb-6">
        <h2 className="card-title">Assassin's Creed Shadows</h2>
        <h3 className="text-sm">
          Assassin's Creed is finally headed to Japan and will continue the series' journey back to its roots. Unlike the open world action Creed games of the past several years, Shadows is following after Mirage by prioritizing stealth again.
        </h3>
        <p className="text-sm font-semibold mt-2">Launching in August 14, 2025</p>
      </div>
    </div>

  
    <div className="card bg-white text-black w-full max-w-md mx-auto shadow-md shadow-red-300">
      <figure className="px-4 pt-6">
        <div className="w-full h-60 overflow-hidden rounded">
          <img
            src="https://cdn.mos.cms.futurecdn.net/e3Lxiobjo2njecKMA2xGyY-200-100.jpg"
            className="w-full h-full "
            alt="Monster Hunter"
          />
        </div>
      </figure>
      <div className="card-body px-6 pb-6">
        <h2 className="card-title">Monster Hunter Wilds</h2>
        <h3 className="text-sm">
          Wilds looks like it may be the cherry on top of a several year run of great Monster Hunter games. It looks like the evolution from Monster Hunter World that we were hoping for with a more responsive, simulated open world of monsters to hunt.
        </h3>
        <p className="text-sm font-semibold mt-2">Launching in November 18, 2025</p>
      </div>
    </div>
  </div>
</section>

              
            <section className="mx-auto py-12 px-4">
  <h2 className="text-4xl font-extrabold mb-8 text-center">Trending News</h2>

  <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {newsList.map((news, idx) => (
      <div key={idx} className="card bg-slate-200 shadow hover:shadow-xl transition w-full max-w-md mx-auto">
        <figure className="h-48 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body px-6 pb-6">
          <h3 className="card-title text-lg font-semibold">{news.title}</h3>
          <p className="text-sm text-gray-500">{news.date}</p>
          <p className="mt-2 text-sm">{news.summary}</p>
          <div className="card-actions justify-end mt-4">
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  <section className=" mx-auto pb-20">
      <h2 className="text-4xl font-bold mb-6 text-center"> Game of the Week</h2>

      <div className="card lg:card-side bg-white shadow-lg shadow-red-300 text-black">
        <figure className="">
          <img src={game.image} alt={game.title} className=" w-[60%] h-[60%] object-cover" />
        </figure>
        <div className="card-body ">
          <h3 className="card-title text-2xl">{game.title}</h3>
          <p className="text-gray-500 text-sm">{game.releaseDate}</p>
          <p className="">{game.description}</p>
          <div className="card-actions justify-end mt-4">
            <a href={game.link} className="btn  bg-red-500 hover:bg-red-600 border-none text-white">Read Reviews</a>
          </div>
        </div>
      </div>
    </section>
      <section className="bg-slate-200 py-8 px-4 text-black">
      <h2 className="text-3xl font-bold text-center mb-6">💬 Gamer Testimonials</h2>
      <Marquee gradient={false} speed={50} pauseOnHover>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="mx-8 bg-slate-100 p-4 rounded-lg shadow-md min-w-[250px] text-center"
          >
            {t}
          </div>
        ))}
      </Marquee>
    </section>
           <section className="relative bg-gradient-to-r from-red-300 via-red-500 to-red-300 py-16 px-6 text-white overflow-hidden shadow-inner rounded-xl my-10">
      <div className="max-w-2xl mx-auto text-center z-10 relative">
        <h2 className="text-4xl font-extrabold mb-4">💌 Join Our Gamer Digest</h2>
        <p className="text-lg text-gray-600 mb-6">
          Be the first to get new reviews, cheat codes, and event alerts.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-80 text-black"
          />
          <button
            type="submit"
            className="btn bg-red-500 text-white hover:bg-red-600 border-0 shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 blur-2xl opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 blur-2xl opacity-20 rounded-full animate-ping"></div>
    </section>

          
        </div>
       </div>

    );
};

export default Home;