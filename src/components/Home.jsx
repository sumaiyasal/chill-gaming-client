const Home = () => {
    return (
        <div className="container mx-auto">
            <section>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://greencade.com/wp-content/uploads/2024/08/maxresdefault-58.png" className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.pcmag.com/imagery/articles/00cWlLBJjuFKgERF0Ep5Owu-1..v1648045633.jpg"
      className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://www.gameuidatabase.com/uploads/Clash-of-Clans12282021-110944-88753.jpg"
      className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.blackflix.com/wp-content/uploads/pubgmobile_1200x76811.jpeg"
      className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </section>
        </div>
    );
};

export default Home;