import { ReactComponent as PlaneSVG } from '../assets/plane.svg';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import bg from '../assets/background.png';
import map from '../assets/map.jpg';

export type Section = 'Home' | 'About' | 'Tracks' | 'Apply' | 'Logistics';
type HeaderOptionType = { label: Section; value: string };

const options: HeaderOptionType[] = [
  { label: 'Home', value: '/home' },
  { label: 'About', value: '/about' },
  { label: 'Tracks', value: '/tracks' },
  { label: 'Apply', value: '/apply' },
  { label: 'Logistics', value: '/logistics' },
];

const Landing = () => {
  return (
    <div className="w-full h-[screen]">
      <div className="fixed flex flex-row w-full h-[100px] px-4 py-2 z-10">
        <div className="grow">
          <LogoSVG className="cursor-pointer w-[25%] h-[100%] my-auto ml-5" />
        </div>
        {options.map((option: HeaderOptionType) => (
          <button className="flex flex-col px-2 py-1 m-2 transition duration-300 ease-in-out delay-150 rounded hover:scale-110 hover:bg-red-100">
            <div className="mx-auto my-auto text-2xl">{option.label}</div>
            <div className="mx-auto my-auto">{option.value}</div>
          </button>
        ))}
      </div>
      <div
        className="h-screen w-full overflow-x-clip bg-cover pt-[5%] relative top-[100px]"
        // style={{ backgroundImage: `url(${bg})` }}
      >
        <PlaneSVG className="w-[60%] mx-auto transition ease-in-out delay-150 hover:scale-110 duration-300 h-min" />
      </div>
      {/* <div
        className="h-[62.5rem] w-full overflow-x-clip"
        style={{ backgroundImage: `url(${map})` }}
      >
        Map
      </div> */}
    </div>
  );
};

export default Landing;
