import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 my-4">

        <img src={logo} alt="DevStack" />

        <ul className="hidden md:flex gap-5 items-center">
          <li className="text-red-500 font-semibold">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="mr-4">Sign In</button>

          <button className="bg-[#d91b7e] rounded-2xl py-2 px-4 text-white">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Nav;