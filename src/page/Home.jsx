import Navbar from "../components/Navbar"
import img from  '../assets/1024x1024_a04.webp'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import Main from "../components/Main";
import Project from "../components/Project";
import About from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
    <div className="main-context flex flex-wrap justify-between p-10" >
      <div className=" relative w-full  lg:w-2/5 xl:w-2/5 detail-part ">
        <div className=" lg:fixed">
       <div className=" bg-zinc-800 h-auto  py-5 px-8 lg:w-80 w-full absolute top-0 left-0 rounded-3xl ">
            <h2 className=" text-5xl font-medium ">
              Hi, <br />
              I&#39;m Simran</h2>
              <div>
                <img src={img} alt="Simran" className="rounded-3xl lg:h-64 md:h-64 h-56 w-full" />
              </div>
              <div className=" mt-2">
                <h5 className=" text-lg">Frontend Developer</h5>
                <h5 className=" text-lg">Noida, India</h5>
              </div>
              <div className=" flex justify-around mb-2 ">
                <Link to="mailto:thakursimran1207@gmail.com" className="rounded-full bg-black p-3 text-xl"><MdEmail /></Link>
                <Link to="https://www.linkedin.com/in/simranthakur07/" target="_blank" className="rounded-full bg-black p-3 text-xl"><FaLinkedin /></Link>
                <Link to="https://my-portfolio-hazel-rho-35.vercel.app/" target="_blank" className="rounded-full bg-black p-3 text-xl"><BsBrowserChrome /></Link>
                <Link className="rounded-full bg-black p-3 text-xl"><FaInstagram /></Link>
              </div>
              <button className=" absolute top-100 bg-pink-200 text-black rounded-xl text-xl w-full left-0 py-1">Contact Me</button>
       </div>
       </div>
      </div>
      <div className="w-full  lg:w-3/5 xl:w-3/5"> 
    <Navbar/> 
    <Main/>
    <Project/>
    <About/>
    <Skill/>
    <Experience/>
    <Contact/>
    <hr />
    <footer className=" flex justify-between flex-wrap py-5">
      <div>Loaction: <br /> India</div>
      <div>
        Email: <br />
        thakursimran1207@gmail.com
      </div>
      <div>
        Phone: <br />
        +91 000000000
      </div>
    </footer>
      </div>
    </div>
    </>
  )
}

export default Home