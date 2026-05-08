import { Link } from "react-router-dom";
import heroProfile from "../assets/hero-profile.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Freelancer from Nepal • Serving Clients Worldwide</p>
          <h1>
            Turning Ideas into Bold Videos, Motion, and Visuals That Get
            Attention
          </h1>
          <p className="subhead">
            Hi, I am Roman Maharjan. I help businesses, creators, and agencies
            grow faster with premium CapCut editing, engaging 2D animation, and
            strategic designs made with Canva, Photoshop, and Illustrator.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">
              Let&apos;s Build Your Next Project
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Work
            </Link>
          </div>
          <ul className="trust-points">
            <li>Fast Delivery</li>
            <li>Clear Communication</li>
            <li>Revision Support</li>
          </ul>
        </div>
        <aside className="hero-card">
          <div className="hero-profile-wrap">
            <img
              src={heroProfile}
              alt="Roman Maharjan portrait"
              className="hero-profile"
              loading="eager"
            />
          </div>
          <h3>High-Value Creative Support</h3>
          <p>Video Editing</p>
          <p>2D Animation</p>
          <p>Graphic Design Systems</p>
          <div className="chip">Available for one-time and monthly projects</div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
