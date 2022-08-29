import { FC } from 'react';
import { ReactComponent as TracksHeaderSVG } from '../assets/tracks_header.svg';
import APL from '../assets/apl.png';

const TrackCard: FC<{
  trackName: string;
  description: string;
  img: string;
}> = ({ trackName, description, img = "" }) => {
  return (
    <div className="flex justify-center p-6 max-w-lg max-h-lg">
      <div className="rounded-2xl bg-[#FCE689] flex justify-center p-4 box-border ">
        <div className="border-4 hover:border-rose-600 rounded-2xl border-white">
          <div className="">
            <h5 className="text-gray-900 text-xl text-center leading-tight font-medium font-extrabold font-sans p-10">
              {trackName}
            </h5>
            {
              img === ""
              ? null
              : <img className="max-h-xs" src={img} alt="Tracks"/>
            }
          </div>
          <p className="text-gray-700 text-center text-md font-sans pt-10 pb-3 px-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Tracks: FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Tracks Header */}
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50 z-20">
        <TracksHeaderSVG className="w-[40%] min-w-[300px] max-w-[500px] h-auto" />
      </div>

      {/* Description of Tracks */}
      <p className="font-sans text-black md:text-2xl sm:text-lg pl-[2%] pr-[2%]  mr-[5%] ml-[5%] pt-10 pb-10 rounded-3xl">
        MedHacks and its sponsors create three tracks every year.
      </p>

      {/* Track Cards */}
      <div className="flex flex-row justify-center flex-wrap">
        {/* JHU APL - Health and Data Science Innovation Track */}
        <TrackCard
          trackName="Health and Data Science Innovation Track"
          description="Your team's mission is to help us advance patient care through an open science “hack.” The possibilities are endless. Identify an emerging issue related to patient care, and then come up with creative and unique solutions to reduce or resolve them. Your project may build on the following focus areas: scaling technology platforms, moving treatment technology from the hospital to the home, improving hospital operation or medical supply logistics, making data actionable, and empowering patients."
          img={APL}
        />
      </div>
    </div>
  );
};

export default Tracks;
