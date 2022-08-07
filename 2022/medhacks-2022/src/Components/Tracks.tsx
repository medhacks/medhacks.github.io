import { FC } from 'react';
import { ReactComponent as TracksHeaderSVG } from '../assets/tracks_header.svg';

const TrackCard: FC<{
  trackName: string;
  description: string;
}> = ({ trackName, description }) => {
  return (
    <div className="flex justify-center p-6 h-72 max-w-xs">
      <div className="rounded-2xl bg-[#FCE689] flex justify-center p-4 box-border ">
        <div className="border-4 hover:border-rose-600 rounded-2xl border-white">
          <h5 className="text-gray-900 text-xl text-center leading-tight font-medium font-bold font-sans p-3">
            {trackName}
          </h5>
          <p className="text-gray-700 text-center text-sm font-sans p-2">
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
        <TracksHeaderSVG className="scale-[50%]" />
      </div>

      {/* Description of Tracks */}
      <p className="font-sans text-white text-2xl pl-20 pr-20 bg-[#CFACB9] mr-20 ml-20 pt-10 pb-10 rounded-3xl z-20">
        Tracks are coming soon! Stay tuned for this year’s tracks and prizes!
      </p>

      {/* Track Cards */}
      <div className="flex flex-row justify-center z-20">
        <TrackCard
          trackName="Track 1"
          description="When cursor hovers over a track, border turns red. Centered description"
        />
        <TrackCard
          trackName="Track 2"
          description="This is just a simple description"
        />
        <TrackCard
          trackName="Track 3"
          description="This is just a simple description"
        />
      </div>
    </div>
  );
};

export default Tracks;
