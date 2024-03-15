import { FaFacebookF, FaInstagram } from "react-icons/fa";
import earth from "../../assets/earth.png";
import { FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="bg-[#fcfaf8] relative w-full z-10">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <img className="w-28 " src={earth} alt="earth" />
        </div>
        <div className="flex gap-10">
          <ul className="flex items-center gap-10 text-lg font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="flex gap-5 items-center">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
