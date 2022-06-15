import { ReactComponent as PlaneSVG } from '../assets/plane.svg';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import bg from '../assets/background.png';
import map from '../assets/map.jpg';
import { FC } from 'react';

export type Section = 'Home' | 'About' | 'Tracks' | 'Apply' | 'Logistics';
type HeaderOptionType = { label: Section; value: string };

const options: HeaderOptionType[] = [
  { label: 'Home', value: '/home' },
  { label: 'About', value: '/about' },
  { label: 'Tracks', value: '/tracks' },
  { label: 'Apply', value: '/apply' },
  { label: 'Logistics', value: '/logistics' },
];

const Landing: FC = () => {
  return (
    <div className="w-full h-[screen] bg-green-600">
      <div className="bg-white py-2 px-4 w-full flex flex-row">
        <div className="grow">
          <LogoSVG className="cursor-pointer w-[25%] h-[100%] my-auto ml-5" />
        </div>
        {options.map((option: HeaderOptionType) => (
          <button className="flex flex-col py-1 px-2 m-2  transition ease-in-out delay-150 hover:scale-110 duration-300 rounded hover:bg-red-100">
            <div className="my-auto text-2xl mx-auto">{option.label}</div>
            <div className="my-auto mx-auto">{option.value}</div>
          </button>
        ))}
      </div>
      <div
        className="h-screen w-full overflow-x-clip bg-cover pt-[5%]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <PlaneSVG className="w-[60%] mx-auto transition ease-in-out delay-150 hover:scale-110 duration-300 h-min" />
      </div>
      <div
        className="h-[62.5rem] w-full overflow-x-clip"
        style={{ backgroundImage: `url(${map})` }}
      >
        Map
      </div>
    </div>
  );
};

export default Landing;
