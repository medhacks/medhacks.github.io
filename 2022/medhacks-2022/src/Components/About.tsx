import { FC } from 'react';
import { ReactComponent as AboutSVG } from '../assets/About_Header_SVG.svg';

const About: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50 z-20">
        <AboutSVG className="scale-[50%]" />
      </div>
      <div className="px-[10%] text-white text-xl text-justify font-['Mulish'] leading 7 bg-[#E3A29ECC] mr-20 ml-20 pt-10 pb-10 rounded-3xl z-20">
        <p className="">
          MedHacks is the nation’s premier medical hackathon at Johns Hopkins
          University – and one of the largest student run hackathons. Our
          participants come from a variety of different fields, ranging from
          undergraduate and graduate students to software engineers and medical
          professionals. This year’s event will take place from September 9th -
          11th, 2022. Hackers will have 36 hours to research, code, prototype,
          and finally, present their work to a judge panel. Applicants can
          register either as a team or an individual looking to form a team at
          the event. This year, we will host a hybrid hackathon so that anyone
          can participate, virtually or in-person (our first on-site event since
          2019!).
        </p>
        <p className="font-bold">
          We can't wait to see you and your ideas at MedHacks 2022!
        </p>
      </div>
    </div>
  );
};

export default About;
