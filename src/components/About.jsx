import SectionTitle from "./SectionTitle";
import portraitOne from "../assets/profile-portrait-1.png";
import portraitTwo from "../assets/profile-portrait-2.png";
import portraitThree from "../assets/profile-portrait-3.png";

function About() {
  const personalMoments = [
    {
      image: portraitOne,
      alt: "Professional portrait in traditional black outfit",
      caption: "Cultural Portrait Session"
    },
    {
      image: portraitTwo,
      alt: "Smiling candid selfie in city street",
      caption: "Street Candid Creative"
    },
    {
      image: portraitThree,
      alt: "Graduation portrait in formal gown",
      caption: "Graduation Milestone"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title="About Me" />
        <p className="lead">
          I am a freelance digital content designer from Nepal, focused on
          delivering high-quality visual content for global clients. My
          expertise combines CapCut video editing, 2D animation, and graphic
          design in Canva, Photoshop, and Illustrator to create content that is
          both visually appealing and results-driven. I work with brands,
          entrepreneurs, and creators who need clean, modern visuals that
          increase engagement and strengthen brand identity. Clients value my
          clear communication, reliable delivery, and detail-focused execution
          from concept to final output. Whether you need short-form videos,
          animated explainers, social media graphics, or polished brand assets,
          I provide tailored solutions aligned with your goals, audience, and
          platform.
        </p>
        <div className="personal-gallery">
          {personalMoments.map((item) => (
            <figure key={item.caption} className="personal-gallery-item">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
