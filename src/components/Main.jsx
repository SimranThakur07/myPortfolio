import { FiDownload } from "react-icons/fi";
import { GiDiamonds } from "react-icons/gi";
import pdf from '../assets/Simran_Kumari.pdf'
const Main = () => {
  return (
    <>
    <div className="  flex flex-col justify-center  h-96 mt-14" id="home">
    <span className="mb-8 border-2 rounded-xl py-2 px-4 text-purple-200 flex justify-center items-center lg:w-1/6"><GiDiamonds />Portfolio</span>
        <h1 className=" text-3xl font-semibold text-pink-200 my-2">Hi, THERE</h1>
        <h1 className=" text-5xl font-semibold text-pink-200 my-2">I&#39;m SIMRAN</h1>
        <h1 className=" text-5xl font-semibold text-pink-200 my-2">I&#39;m a FRONTEND DEVELOPER</h1>
        <a href={pdf} download className="bg-pink-200 text-black rounded-2xl px-3 py-3 lg:w-1/4 w-full text-center font-semibold text-base flex justify-center items-center mt-6">Download CV
        <FiDownload />
        </a>
    </div>
    </>
  )
}

export default Main