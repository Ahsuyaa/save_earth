import { FC } from "react";

const FitScreen: FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <img
        src="https://bridge296.qodeinteractive.com/wp-content/uploads/2019/12/parallax-img-1.jpg" // Replace with the URL or path to your image
        alt="fit-screen-image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FitScreen;
