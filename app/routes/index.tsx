import Hero from "../components/slider/Hero";

const description = `I help brands, companies, and people to bring to life their ideas. 
If you're looking for a software developer with an entrepreneurial spirit and life-long learning mindset, you're in the right place. Hi! It is a pleasure to meet you!`;

const Home = () => {
  return (
    <div className="home-light edina_tm_mainpart">
      <Hero
        heroImage="angelromerobaez"
        shapeImage="hero-shape"
        name="Angel Romero Baez"
        description={description}
      />
    </div>
  );
};

export default Home;
