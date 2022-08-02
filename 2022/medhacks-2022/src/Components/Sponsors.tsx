import { FC } from 'react';
import { ReactComponent as SponsorsSVG } from '../assets/sponsors_header.svg';
import bourne from '../assets/bourne digital.png'
import amplitude from '../assets/amplitude.png'
const Sponsors: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <SponsorsSVG className="scale-[70%]" />
      </div>
      <div className="px-[10%] text-white text-xl text-justify font-['Mulish'] leading 7"></div>
        <div className="flex  items-center gap-36">
            <div className="basis-1/3 ml-20 mr-2 object-cover">
                <img src={bourne} alt="Bourne Logo" />
            </div>
            <div className="basis-1/3 ml-2 mr-2 object-cover">
                <img src={amplitude} alt="amplitude Logo" />
            </div>
            <div className="basis-1/3 ml-2 mr-20 object-cover">
                <img src={bourne} alt="Bourne Logo" />
            </div>
        </div>
    </div>
  );
};

export default Sponsors;
