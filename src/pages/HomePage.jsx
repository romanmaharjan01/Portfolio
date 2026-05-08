import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { services } from "../data";

function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <Hero />
      <section className="section landing-highlights">
        <div className="container">
          <div className="landing-stats">
            <article className="card">
              <h3>Fast Turnaround</h3>
              <p>Clear timelines and reliable delivery for every milestone.</p>
            </article>
            <article className="card">
              <h3>Premium Visual Quality</h3>
              <p>Modern, polished content built to improve engagement.</p>
            </article>
            <article className="card">
              <h3>Client-First Workflow</h3>
              <p>Easy communication, revisions, and outcomes focused on growth.</p>
            </article>
          </div>

          <div className="landing-services">
            <h2>Featured Services</h2>
            <div className="grid cards-3">
              {featuredServices.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="landing-cta-row">
            <Link to="/portfolio" className="btn btn-primary">
              Explore Full Portfolio
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
