


const Navbar = () => {
  return (
    <div className=" font-bold text-lg fixed nav z-10 lg:flex hidden ">
        <ul className=" flex justify-around">
          <li className="me-6 rounded-xl p-2"><a className=" rounded-xl" href="#home">Home</a></li>
          <li className="mx-6 rounded-xl p-2"><a className=" rounded-xl" href="#portfolio">Portfolio</a></li>
          <li className="mx-6 rounded-xl p-2"><a className=" rounded-xl" href="#about">About Me</a></li>
          <li className="mx-6 rounded-xl p-2"><a className=" rounded-xl" href="#resume">Resume</a></li>
          <li className="mx-6 rounded-xl p-2"><a className=" rounded-xl" href="#contact">Contact Me</a></li>
        </ul>

    </div>
  )
}

export default Navbar