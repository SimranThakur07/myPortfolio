
import { GiDiamonds } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import pdf from '../assets/Simran_Kumari.pdf'
const About = () => {
  return (
    <>
    <div className="project mt-28" id="about">
        <span className=" border-2 rounded-xl py-2 px-4 text-purple-200 flex justify-center items-center lg:w-1/5 ">
          <GiDiamonds />
          About Me
        </span>
        <h1 className=" text-3xl text-pink-200 font-semibold mt-6">
        Turning complex problems into simple solution
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-6">
  <div className="col-span-2 text-justify">
    <p>Welcome to my portfolio website! I am thrilled to have this opportunity to share a bit about myself and my passion for frontend development.</p>
    <p>
    I am a dedicated and creative frontend developer with a love for crafting visually appealing and user-friendly websites. With a keen eye for design and a strong foundation in coding, I strive to create seamless and engaging online experiences.
Thank you for taking the time to visit my portfolio website. I hope you enjoy browsing through my projects and getting a glimpse of my passion for frontend development.
    </p>
    <a href={pdf} download className=" bg-pink-200 text-black rounded-2xl px-3 py-3 lg:w-1/3 w-full text-center font-semibold text-base flex justify-center items-center mt-6">Download CV
        <FiDownload />
        </a>
  </div>
  <div>
    <div className=" flex flex-col mb-3">
        <label htmlFor="" className=" text-gray-400">Name:</label>
        <span className=" font-semibold">Simran Kumari</span>
    </div>
    <div className=" flex flex-col mb-3">
        <label htmlFor="" className=" text-gray-400">Email:</label>
        <span className=" font-semibold">thakusimran1207@gmail.com</span>
    </div>
    <div className=" flex flex-col mb-3">
        <label htmlFor="" className=" text-gray-400">Mobile:</label>
        <span className=" font-semibold">+91 0000000</span>
    </div>
    <div className=" flex flex-col mb-3">
        <label htmlFor="" className=" text-gray-400">Location:</label>
        <span className=" font-semibold">India</span>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default About