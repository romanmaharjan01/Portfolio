import SectionTitle from "./SectionTitle";

function Feedback() {
  return (
    <section id="feedback" className="section">
      <div className="container">
        <SectionTitle
          title="Client Feedback Coming Soon"
          subtitle="No fake testimonials. This section is reserved for verified client reviews."
        />
        <div className="grid cards-3">
          <article className="card placeholder-card">
            Client review will appear here after project completion and approval.
          </article>
          <article className="card placeholder-card">
            Verified Fiverr/Upwork feedback will be displayed with service context.
          </article>
          <article className="card placeholder-card">
            This section will include only real, permission-based testimonials.
          </article>
        </div>
        <div className="ethics">
          <h3>How to collect real reviews ethically</h3>
          <ul>
            <li>Ask for feedback after successful delivery and revisions.</li>
            <li>Request honest, unscripted reviews.</li>
            <li>Prefer platform-based reviews for transparency.</li>
            <li>Get client permission before publishing on personal site.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
