import "./Hero.css"

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Mohammad Awad</h1>

        <div className="hero-image-container">
          <div className="hero-image-glow"></div>
          <img src="profile.jpg" alt="Mohammad Awad" />
        </div>
        <h2>Full Stack Web Developer</h2>
      </div>
    </section>
  );
}

export default Hero;