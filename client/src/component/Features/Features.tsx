import { FC } from "react";

interface Feature {
  title: string;
  paragraph: string;
  button: string;
}

interface FeaturesProps {
  featuresList: Feature[];
}

const Features: FC<FeaturesProps> = ({ featuresList }) => {
  return (
    <div className="w-full relative z-10 bg-[#fcfaf8]">
      <div
        className="grid grid-cols-3 mx-auto container gap-5 py-10 "
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {featuresList.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-sm p-10">
            <h5 className="text-2xl font-semibold">{feature.title}</h5>
            <p className="text-gray-500 font-medium">{feature.paragraph}</p>
            <button className="text-[#8cc640] my-2 font-bold">
              {feature.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
