import { FC } from "react";
interface BannerProps {
  title: string;
  subtitle: string;
  button: string;
  img?: string;
}
const HeroBanner: FC<BannerProps> = ({ title, subtitle, button, img }) => {
  return (
    <div className="bg-[#fcfaf8] relative w-full z-10">
      <div className="container mx-auto text-center">
        <h2
          className="uppercase text-xl text-[#8cc640] font-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {subtitle}
        </h2>
        <h1
          className="text-[60px] leading-[70px] px-[20%] mb-4 "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {title}
        </h1>
        <button
          className="bg-[#8cc640] text-white px-10 py-3 uppercase"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {button}
        </button>
        <img
          src={img}
          alt="img"
          className="mx-auto w-full z-20"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
