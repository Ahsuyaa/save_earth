import { FC } from "react";
interface awaypollution {
  title: string;
  paragraph: string;
  img: string;
  widths: number[];
  progresstitle: string[];
}
const AwayPollution: FC<awaypollution> = ({
  title,
  paragraph,
  img,
  widths,
  progresstitle,
}) => {
  return (
    <>
      <div className="bg-[#fcfaf8] relative z-10 w-full">
        <div className="grid grid-cols-2 gap-10  container mx-auto py-20 ">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold uppercase mr-[150px] leading-relaxed">
              {title}
            </h2>
            <p className="my-5 text-[20px]">{paragraph}</p>
            <div
              className="max-w-[500px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              {widths.map((width, index) => (
                <div>
                  <div className="flex justify-between">
                    <h6>{progresstitle[index]}</h6>
                    <h6>{width}%</h6>
                  </div>
                  <div
                    key={index}
                    className={` h-2 my-3 ${
                      width > 75
                        ? "bg-green-600"
                        : width > 50 && width < 75
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwayPollution;
