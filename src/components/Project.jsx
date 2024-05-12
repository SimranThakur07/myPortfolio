import { GiDiamonds } from "react-icons/gi";
import img1 from '../assets/download.png'
import img2 from '../assets/Vite-React.png'
import img3 from '../assets/Netflix.png'
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="project mt-28" id="portfolio">
        <span className=" border-2 rounded-xl py-2 px-4 text-purple-200 flex justify-center items-center lg:w-1/6">
          <GiDiamonds />
          Projects
        </span>
        <h1 className=" text-3xl text-pink-200 font-semibold mt-6">
          Check out my featured projects
        </h1>
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 mt-8">
         
          <div className=" rounded-2xl h-80 relative">
            <Link to="https://github.com/SimranThakur07/myPortfolio" target="_blank"><img src={img2} alt="" className=" rounded-2xl h-full project-img w-full " /></Link>
           
          </div>
          <div className=" rounded-2xl h-80 relative">
            <Link to="https://github.com/SimranThakur07/MERN--Ecommerce-frontend" target="_blank"><img src={img1} alt="" className=" rounded-2xl h-full project-img w-full " /></Link>
            
          </div>
          <div className=" rounded-3xl h-80 relative">
            <Link to="https://github.com/SimranThakur07/Netflixclone" target="_blank"><img src={img3} alt="" className=" rounded-3xl h-full project-img w-full" /></Link>
           
          </div>
          <div className=" rounded-3xl h-80 relative">
            <Link><img src={img1} alt="" className=" rounded-3xl h-full project-img w-full" /></Link>
           
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Project;
