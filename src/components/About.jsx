import React from "react";

const About = () => {
  return (
    <div className="min-h-screen h-full pt-10 w-full flex flex-col text-sky-300">
      <div className="w-full m-h-screen">
        <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto pt-8 pb-12 text-center">
          {/* Website Section */}
          <h1 className="text-4xl font-bold text-blue-400 mb-6">
            About <span className="text-blue-400">Stack</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            Welcome to <strong>Stack</strong>, the ultimate collection of web applications I have developed so far. This platform showcases a wide range of 
            my projects, from serious web development tools to fun and quirky applications. Whether you're looking for productivity tools, games, or just 
            something fun to explore, Stack has something for everyone.
          </p>

          <div className="p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-sky-400 mb-8">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Why Explore Stack?</h2>
            <ul className="list-disc list-inside text-left space-y-3">
              <li>Explore a diverse range of applications I've built over the years.</li>
             
              <li>Built with a passion for web development and a sense of creativity.</li>
              <li>Constantly updated with new projects and features.</li>
            </ul>
          </div>

          {/* Personal Section */}
          <h2 className="text-3xl text-blue-400 font-semibold mb-6">About Me</h2>
          <div className="p-6 mb-28 rounded-lg shadow-md hover:shadow-lg hover:shadow-sky-400">
            <p className="text-lg leading-relaxed">
              Hey! I'm <strong>Adarsh Pathania</strong>, a passionate developer and the creator of <strong>Stack</strong>. I have a strong background in
              <strong>web development</strong> and enjoy building everything from useful web tools to fun and interactive applications that bring a smile to your face.
              This platform is a reflection of my journey, combining both professional projects and playful, creative apps.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              When I'm not coding, I spend my time diving into anime, playing chess, or sharing my knowledge with others through teaching web development. 
              Every project I build is a step toward creating something unique, whether it's a functional tool or a fun experience for users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
