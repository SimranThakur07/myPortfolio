import { GiDiamonds } from "react-icons/gi";
import img1 from "../assets/icon-html.svg";
import img2 from "../assets/icon-css.svg";
import img3 from "../assets/react1.svg";
import img4 from "../assets/redux.svg";
import img5 from "../assets/javascript.svg";
import img6 from "../assets/nodejs.svg";
import img7 from "../assets/github.svg";
import img8 from "../assets/figma.svg";
const Skill = () => {
  return (
    <>
      <div className="project mt-28">
        <span className=" border-2 rounded-xl py-2 px-4 text-purple-200 flex justify-center items-center lg:w-1/5">
          <GiDiamonds />
          Skills
        </span>
        <h1 className=" text-3xl text-pink-200 font-semibold mt-6">
          My favourite tools
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center ">
            <img src={img3} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">React JS</span>
          </div>

          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img4} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">Redux</span>
          </div>
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img5} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">JavaScript</span>
          </div>
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img6} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">Node JS</span>
          </div>
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img1} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">HTML5</span>
          </div>

          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img2} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">CSS3</span>
          </div>
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img7} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">Git & Github</span>
          </div>
          <div className=" border-slate-400 border-2 rounded-2xl p-3  text-center">
            <img src={img8} alt="" className=" m-auto mb-1 h-20" />
            <span className=" font-medium">Figma</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Skill;
