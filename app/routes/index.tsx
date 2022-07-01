import Hero from "../components/slider/Hero";

const description = `I help brands, companies, and people to bring to life their ideas. 
If you're looking for a software developer with an entrepreneurial spirit and life-long learning mindset, you're in the right place. Let's talk!`;

const Home = () => {
  return (
    <div className="home-light edina_tm_mainpart">
      <Hero name="Angel Romero Baez" description={description} />
    </div>
  );
};

export default Home;

export const handle = { hydrate: false };
