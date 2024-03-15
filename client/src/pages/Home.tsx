import React from "react";
import HeroBanner from "../component/Herobanner/HeroBanner";
import home from "../assets/home3.png";
import AwayPollution from "../component/Awaypollution/AwayPollution";
import solution from "../assets/solution.jpg";
import Features from "../component/Features/Features";
import FitScreen from "../component/Fitscreen/FitScreen";

import Contact from "../component/contact/Contact";
import JoinUs from "../component/Joinus/JoinUs";
const Home: React.FC = () => {
  const data = [
    {
      title: "Go green campaign",
      widths: 100,
    },
    {
      title: "Pollution control",
      widths: 30,
    },
    {
      title: "Energy saving",
      widths: 59,
    },
  ];
  const data2 = [
    {
      title: "  Energy Saving",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      button: "learn more",
    },
    {
      title: "Save the Planet",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      button: "learn more",
    },
    {
      title: "Paper Recycling",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      button: "learn more",
    },
  ];
  const data3 = [
    {
      img: "https://bridge296.qodeinteractive.com/wp-content/uploads/2019/12/single-img-2.jpg",
      title: "Hear the Tree Fallings?",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      button: "learn more",
    },
    {
      img: "	https://bridge296.qodeinteractive.com/wp-content/uploads/2019/12/single-img-3.jpg",
      title: "Spare a watt ,share a lot",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      button: "learn more",
    },
    {
      img: "https://bridge296.qodeinteractive.com/wp-content/uploads/2019/12/single-img-4.jpg",
      title: "Pollution is not a solution",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      button: "learn more",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Green. That's how we'd like the world to be."
        subtitle="what would nature do?"
        button="get involved"
        img={home}
      />
      <Features featuresList={data2} />
      <AwayPollution
        title="away from pollution, towards solution"
        img={solution}
        paragraph="   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis optio error eveniet rem sapiente, rerum ad saepe. Quia, nam."
        widths={data.map((item) => item.widths)}
        progresstitle={data.map((item) => item.title)}
      />
      <FitScreen />
      <Contact />
      <JoinUs JoinList={data3} />
    </>
  );
};

export default Home;
