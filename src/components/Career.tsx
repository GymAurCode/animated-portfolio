import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Self-Employed · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing modern full-stack web applications using React, Node.js,
              Express, and MongoDB. Building AI-powered business management systems,
              designing responsive UIs, creating RESTful APIs, and integrating AI features
              to automate workflows. Developing cross-platform desktop applications with
              Electron.js and mobile applications with Flutter. Building AI bots and
              automation systems to streamline business operations and improve productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
