import { FC } from 'react';
import { ReactComponent as SponsorsSVG } from '../assets/sponsors_header.svg';

const Sponsors: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <SponsorsSVG className="scale-[70%]" />
      </div>
      <div className="px-[10%] text-white text-xl text-justify font-['Mulish'] leading 7">
        
      </div>
    </div>
  );
};

export default Sponsors;
