import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import { useState } from "react";

function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getYouTubeEmbedUrl = (url) => {
    // Extract video ID from various YouTube URL formats
    let videoId;
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1];
    } else {
      videoId = url;
    }
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  };

  return (
    <section id="portfolio" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Sample Portfolio Projects"
          subtitle="Realistic project types for Fiverr, Upwork, and direct clients."
        />
        <div className="grid cards-2">
          {projects.map((project) => (
            <article key={project.name} className="card project-card">
              {/* Video or Image */}
              {project.video ? (
                <div
                  className="project-media"
                  onClick={() => setSelectedVideo(project.video)}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-image" style={{
                      background: "#333",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "300px"
                    }}>
                      <span style={{ color: "#fff", fontSize: "1rem" }}>Video Project</span>
                    </div>
                  )}
                  {/* Play Button Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "60px",
                      height: "60px",
                      background: "rgba(255, 0, 0, 0.8)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    className="play-button"
                  >
                    <span style={{ fontSize: "24px", color: "white", marginLeft: "4px" }}>▶</span>
                  </div>
                </div>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                />
              ) : null}
              <h3>{project.name}</h3>
              <p>
                <strong style={{ color: "var(--primary)" }}>Goal:</strong> {project.goal}
              </p>
              <p>
                <strong style={{ color: "var(--primary)" }}>Tools:</strong> {project.tools}
              </p>
              <p>
                <strong style={{ color: "var(--primary)" }}>Outcome:</strong> {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedVideo.includes("youtu") || selectedVideo.includes("youtube") ? (
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo)}
                title="Portfolio Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <video
                src={selectedVideo}
                controls
                autoPlay
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
        </div>
      )}

      {/* Quality Disclaimer */}
      <div style={{ textAlign: "center", marginTop: "3rem", color: "var(--muted)", fontSize: "0.875rem" }}>
        <p style={{ margin: "0" }}>
          <strong>Note:</strong> Media quality reflects source materials and specifications provided by clients. Each project demonstrates professional execution within the scope of client requirements.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
