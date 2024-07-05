import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <Hero />
        <div className="absolute top-1/2">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-500">Hi, My name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Udara Madumalka
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#A91D3A]">
              I am a Frontend Developer
            </h2>
            <p className="text-white py-4 max-w-[700px]">
              I’m a Frontend Developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive web applications.
            </p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex fixed flex-col top-[35%] right-[-100px]">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center hover:ml-[-110px] duration-300 bg-orange-950">
              <a
                className="flex justify-between items-center w-full text-gray-300 p-2"
                onClick={() =>
                  window.open("https://github.com/udamadu11", "_blank")
                }
              >
                <FaGithub size={24} />
                GitHub
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center hover:ml-[-110px] duration-300 bg-cyan-950">
              <a
                className="flex justify-between items-center w-full text-gray-300 p-2"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/udara-madumalka-20a7a1168/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin size={24} />
                Linkedin
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center hover:ml-[-110px] duration-300 bg-zinc-700">
              <a
                className="flex justify-between items-center w-full text-gray-300 p-2"
                href="mailto:madu12dara@gmail.com"
              >
                <HiOutlineMail size={24} />
                Gmail
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center hover:ml-[-110px] duration-300 bg-green-950">
              <a
                className="flex justify-between items-center w-full text-gray-300 p-2"
                href="tel:0773527343"
              >
                <BsPersonLinesFill size={24} />
                Telephone
              </a>
            </li>
          </ul>
        </div>
      </div>
      <About />
      <Skills />
      <Works />
    </>
  );
};

export default Home;
