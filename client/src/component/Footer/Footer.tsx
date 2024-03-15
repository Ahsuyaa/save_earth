import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" relative bg-[#f3eee9] z-10 ">
      <div className="grid grid-cols-4 gap-10  container mx-auto py-10 ">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Save Earth</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus error dignissimos dolorum cupiditate nam nihil deserunt
            a qui odit suscipit?
          </p>
          <div className="flex gap-5">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div>
          <h2 className="text-xl  mb-5">Useful Links</h2>
          <ul className="space-y-5">
            <li>No Water,No life</li>
            <li>Kick the Co2 Habit</li>
            <li> Never refuse to reuse</li>
            <li> Serve to conserve </li>
            <li>What would natute Do?</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl mb-5">About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
            hic nihil cum consequatur eligendi nulla. Inventore culpa molestias
            earum?
          </p>
        </div>
        <div className="">
          <h2 className="text-xl mb-5">Our office</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
            hic nihil cum consequatur eligendi nulla. Inventore culpa molestias
            earum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
