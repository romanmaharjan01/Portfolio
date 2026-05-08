import SectionTitle from "./SectionTitle";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle title="Skills" />
        <div className="grid cards-3">
          {Object.entries(skills).map(([category, values]) => (
            <article key={category} className="card">
              <h3>{category}</h3>
              <ul className="skill-list">
                {values.map(([name, level]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <strong>{level}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
