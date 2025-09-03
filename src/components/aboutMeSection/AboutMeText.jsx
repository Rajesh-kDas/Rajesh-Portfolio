import React from "react";
import { useNavigate } from "react-router-dom";

const AboutMeText = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I am a passionate and dedicated Full Stack Developer with a solid
        foundation in both frontend and backend development. I specialize in
        Core Java and have hands-on experience working with the Spring Boot
        framework to build scalable backend systems. On the frontend, I have
        developed responsive and interactive user interfaces using HTML, CSS,
        JavaScript, React.js, and Bootstrap. My knowledge extends to working
        with databases such as MySQL, SQL, MongoDB, and Oracle, enabling me to
        handle data efficiently across various platforms. I am well-versed in
        software development tools and IDEs like Visual Studio Code, Eclipse,
        and IDLE, which I use to streamline my workflow and maintain code
        quality. With a strong understanding of data structures and algorithms,
        I approach problem-solving with logic and clarity, always aiming to
        build optimized solutions. My passion for technology drives me to
        continuously learn and stay updated with the latest trends in the
        software industry. I am now looking for opportunities where I can apply
        my skills, grow professionally, and contribute meaningfully to a
        forward-thinking development team.
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
        onClick={() => navigate("/academic-progression")}
      >
        Academic Progression
      </button>
    </div>
  );
};

export default AboutMeText;
