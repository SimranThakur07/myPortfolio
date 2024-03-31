import { GiDiamonds } from "react-icons/gi";

const Experience = () => {
  return (
    <>
     <div className="project mt-28" id="resume">
        <span className=" border-2 rounded-xl py-2 px-4 text-purple-200 flex justify-center items-center lg:w-1/5">
          <GiDiamonds />
          Resume
        </span>
        <h1 className=" text-3xl text-pink-200 font-semibold mt-6">
        Education and practical experience
        </h1>
        <div className="mb-14">
        <h1 className=" text-3xl mt-6 mb-4">
        Work experience
        </h1>
        <hr />
        <div className="flex flex-wrap justify-between my-5">
            <span>Oct 2023 - Current</span>
            <p>Frontend Developer</p>
            <p>Infotiqq Noida, India</p>
        </div>
        <hr />
        <div className="flex justify-between my-5">
            <span>Apr 2023 - Sep 2023</span>
            <p>Frontend Developer Trainee</p>
            <p>Infotiqq Noida, India</p>
        </div>
        </div>
        <div>
        <h1 className=" text-3xl mt-6 mb-4">
        My Education
        </h1>
        <hr />
        <div className="flex justify-between my-5">
            <span>2019 - 2022</span>
            <p>Bachelor of Computer Application (BCA)</p>
            <p>Arcade Business College, Patna Bihar</p>
        </div>
        <hr />
        <div className="flex justify-between my-5">
            <span>2016 - 2018</span>
            <p>XII (HSC)</p>
            <p>P.C High School, Samastipur Bihar</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default Experience