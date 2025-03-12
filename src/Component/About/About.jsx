import img from "../../assets/images/asmat.png";
import "./About.css";
function About() {
  return (
    <div className="about-card">
      <div className="img">
        <img src={img} alt="" width="100%" height="100%" />
      </div>
      <span>About Me</span>
      <hr />
      <p className="info fs-5">
        <h3>Current Studies</h3>I am an undergraduate student pursuing a
        Bachelor's degree in Computer Science at The Agriculture University of
        Peshawar. I recently completed a Full-Stack Developer internship at p92
        IT Software House in Khyber Pakhtunkhwa (KPK).
      </p>
      <p className="info fs-5">
        <h3>A passionate web Developer</h3>
        As a web developer, I have worked on numerous projects, focusing on
        designing and developing websites that are both visually appealing and
        highly functional. I have been working as a Full-Stack Developer, honing
        my skills in the MERN stack (MongoDB, Express, React, Node.js). I am
        well-versed in technologies including HTML5, CSS3, Bootstrap,
        JavaScript, React.js, Node.js, Express.js, and MongoDB. I specialize in
        creating responsive web templates and mobile-friendly designs. If you're
        looking for a dedicated and skilled web developer, feel free to reach
        out!.
      </p>
      <p className="info fs-5">
        <h3>Future Goal</h3>As I continue to master modern web development technologies, my goal is to work on more complex, scalable projects. I am excited to explore new opportunities where I can merge my Full Stack expertise with my growing knowledge in Artificial Intelligence, contributing to innovative and impactful solutions.
      </p>
    </div>
  );
}
export default About;
