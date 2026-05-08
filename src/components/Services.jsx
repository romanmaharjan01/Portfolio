import SectionTitle from "./SectionTitle";
import { services } from "../data";

function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Premium Services"
          subtitle="Built to make your content perform and convert."
        />
        <div className="grid cards-3">
          {services.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
