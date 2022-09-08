import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          My name is Emmanuel Onencan.
        </p>
        <br />
        <p className="text-xl">
          I'm a passionate Frontend developer dedicated to the building &
          optimising user-centric, high-impact web applications & server
          architecture using technical, analytical, problem solving skills to
          create competitive, reliable, revenue increasing services & ventures.
        </p>
        <br />
        <p className="">
          I’m familiar with Javascript ( Node JS )/Express JS , React JS/Next JS, Redux/Context, Tailwind CSS/CSS, Sanity/MongoDB/Firebase, Wordpress and HTML5. I enjoy learning new skills and
          meeting new software developers.
        </p>

        <br />
        <p className="">
         I love playing the guita, listening to music, going out, fitness and having a good time. Besides busy Schedules.
        </p>

    
      </div>
    </div>
  );
};

export default About;
