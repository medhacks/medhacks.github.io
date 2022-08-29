import { FC } from 'react';
import { ReactComponent as SponsorsSVG } from '../assets/sponsors_header.svg';
import bourne from '../assets/bourne digital.png'
import amplitude from '../assets/amplitude.png'
const Sponsors: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <SponsorsSVG className="w-[70%] min-w-[400px] max-w-[800px] h-auto"  />
      </div>
      {/* <div className="flex  items-center gap-36 mt-10 mb-20">
        <div className="basis-1/3 ml-20 mr-2 object-cover">
          <img src={bourne} alt="Bourne Logo" />
        </div>
        <div className="basis-1/3 ml-2 mr-2 object-cover">
          <img src={amplitude} alt="amplitude Logo" />
        </div>
        <div className="basis-1/3 ml-2 mr-20 object-cover">
          <img src={bourne} alt="Bourne Logo" />
        </div>
      </div> */}
      <div className="text-black justify-center font-['Mulish'] bg-[#0000000F] w-[80%] m-auto pt-5 pb-5 rounded-3xl">

        <div className="px-[10%] text-[#E63F21] md:text-2xl text-xl justify-center leading 7 font-bold tracking-wide">
          Thank you to this year’s sponsors!
        </div>
        <br/>
        <p className="md:text-xl sm:text-lg">
          Interested in sponsoring MedHacks 2023? Email us at outreach@medhacks.io!
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
