import { FC } from 'react';
import { ReactComponent as AboutSVG } from '../assets/About_Header_SVG.svg';

const About: FC = () => {
  return (
      <div className="w-full bg-[#8FC150] flex flex-col">
          <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
              <AboutSVG className="scale-[50%]" />
          </div>
          <div className="px-80 text-white text-xl text-justify font-['Mulish'] leading 7">
              <p className="">It was started in 2015 by undergraduate students at Johns Hopkins
                  University with the mission to bring together talented and diverse
                  minds from all backgrounds and to foster collaboration towards
                  solving the world's most pressing medical issues. As a result,
                  MedHacks has hosted hackers with diverse majors ranging from public
                  health to anthropology to computer science. Over the years, MedHacks
                  has been attended by thousands from over 500 institutions and 30
                  countries, has formed partnerships with companies at the forefront
                  of medicine and technology including Blue Cross Blue Shield, CVS
                  Health, Google, and MathWorks, and has established itself as one of
                  the world's most recognized and influential medical hackathons.
              </p>
              <p className="font-bold">We can't wait to see you and your ideas at MedHacks 2022!</p>
          </div>
      </div>

  )
};

export default About;
