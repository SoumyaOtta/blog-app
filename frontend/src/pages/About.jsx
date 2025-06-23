import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
         an aspiring full stack developer with 
         basic hands-on experience in both front-end and 
         back-end technologies. I enjoy building 
         clean, functional, and user-friendly web applications, and I'm continuously 
         learning through practical project work and real-world problem-solving.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Overview:
      </h2>
      <p>
        <ul>Front-End:</ul>
        I have basic knowledge of JavaScript frameworks like React.js, 
        Vue.js, and Next.js. I'm comfortable using HTML, CSS, and responsive
        design techniques to create simple and interactive user interfaces.

        <ul>Back-End:</ul>
        I’ve worked with Node.js and Express.js to build server-side functionality 
        and APIs. I also have experience using both MySQL and MongoDB for managing 
        and storing data.
        Although I’m still exploring DevOps and cloud tools, I focus on learning by 
        doing—building projects, debugging issues, and improving my understanding step by step.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully developed and deployed full-stack application,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <h2 className="font-semibold text-blue-800 text-xl">
        Career Aspirations:
      </h2>
      <p>
        As a passionate learner in the field of web development, my career 
        aspiration is to grow as a full stack developer by building real-world 
        applications that solve meaningful problems. I aim to strengthen my skills 
        in technologies like React.js, Node.js, Express.js, Next.js, MySQL, and MongoDB 
        through hands-on experience and collaboration with experienced teams. In the long 
        run, I aspire to contribute to impactful projects, keep learning new technologies, 
        and become a reliable developer who writes clean, maintainable, and efficient code. 
        I’m also interested in understanding the full software development lifecycle, from 
        planning to deployment, and hope to take on increasing responsibilities as I grow 
        in my career.
      </p>
      
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        Outside of coding, I’m passionate about cricket and enjoy listening to music. 
        My biggest inspiration is <strong> MS Dhoni.</strong> his calm nature, sharp 
        leadership, and never-give-up attitude constantly motivate me to stay focused 
        and keep improving in everything I do.
      </p>
    </div>
  );
}

export default About;