import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact">
          <SectionTitle title="Let's Work Together" />
          <p className="contact-intro">
            If you are looking for a reliable creative partner for video
            editing, animation, or design, send your project goals, timeline,
            and platform. I will reply with a clear workflow, delivery plan, and
            custom quote.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:maharjanroman351@gmail.com?subject=Project%20Inquiry"
              className="btn btn-primary"
            >
              Send Project Brief
            </a>
            <a
              href="https://www.fiverr.com/s/bdQAQLp"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View Fiverr Profile
            </a>
            <a
              href="https://www.linkedin.com/in/roman-maharjan-32bb3b2b0/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="contact-cards">
            <article className="contact-card">
              <h3>Email</h3>
              <a href="mailto:maharjanroman351@gmail.com">
                maharjanroman351@gmail.com
              </a>
            </article>
            <article className="contact-card">
              <h3>Contact Number</h3>
              <a href="tel:+9779767979319">+977-9767979319</a>
            </article>
            <article className="contact-card">
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/9779813917272"
                target="_blank"
                rel="noreferrer"
              >
                +977-9813917272
              </a>
            </article>
          </div>
        </div>

        <div className="contact-extra">
          <h2>Simple Project Workflow</h2>
          <div className="grid cards-3">
            <article className="card">
              <h3>1) Share Your Brief</h3>
              <p>
                Tell me your goals, style reference, platform, and expected
                timeline.
              </p>
            </article>
            <article className="card">
              <h3>2) Creative Production</h3>
              <p>
                I create drafts with a clear direction, then refine based on
                your feedback.
              </p>
            </article>
            <article className="card">
              <h3>3) Final Delivery</h3>
              <p>
                Receive polished assets in your required formats, ready to
                publish.
              </p>
            </article>
          </div>
          <p className="contact-note">
            Typical response time: within 12-24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
