import { FC } from "react";

interface lists {
  img: string;
  title: string;
  paragraph: string;
  button: string;
}

interface JoinProps {
  JoinList: lists[];
}

const JoinUs: FC<JoinProps> = ({ JoinList }) => {
  return (
    <div className="w-full relative z-10 bg-[#fcfaf8] py-20">
      <h2 className="text-4xl text-center mx-[28%] font-bold">
        Join the race to make the world better place
      </h2>
      <div className="grid grid-cols-3 mx-auto container gap-5 ">
        {JoinList.map((Join, index) => (
          <div key={index} className="p-10">
            <img
              src={Join.img}
              alt="images"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
            <h5 className="text-2xl font-semibold text-center">{Join.title}</h5>
            <p className="text-gray-500 font-medium text-center">
              {Join.paragraph}
            </p>
            <div className="flex justify-center">
              <button className="text-[#8cc640] my-2 font-bold">
                {Join.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
