import { FC } from 'react';
import { ReactComponent as TracksHeaderSVG } from '../assets/tracks_header.svg';
import APL from '../assets/apl.png';
import CILDI from '../assets/CILDI_White Vertical.png';
import PSTC from '../assets/PSTC logo.png';

const TrackCard: FC<{
  trackName: string;
  description: React.ReactElement<any>;
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
                : <img className="max-h-xs m-auto" src={img} alt="Tracks" />
            }
          </div>
          <div className="text-gray-700 text-center text-md font-sans pt-10 pb-3 px-2">
            {description}
          </div>
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
        MedHacks and their sponsors are pleased to present three title tracks this year!
      </p>

      {/* Track Cards */}
      <div className="flex flex-row justify-center flex-wrap">
        {/* JHU APL - Health and Data Science Innovation Track */}
        <TrackCard
          trackName="Health and Data Science Innovation Track"
          description={<div>Your team's mission is to help us advance patient care through an open science “hack.” The possibilities are endless. Identify an emerging issue related to patient care, and then come up with creative and unique solutions to reduce or resolve them. Your project may build on the following focus areas: scaling technology platforms, moving treatment technology from the hospital to the home, improving hospital operation or medical supply logistics, making data actionable, and empowering patients.</div>}
          img={APL}
        />
        {/* School of Nursing Track */}
        <TrackCard
          trackName="Innovations in Reducing Human Errors and Improving Patient Safety in Hospital Settings"
          description={<div>Your team’s mission is to help us reduce human errors and improve patient safety in hospital settings. Despite critical attention and successful interventions, patient safety remains a significant problem in the United States. Human errors lead to adverse medication errors and healthcare-association infections. Your goal is to develop technology-enabled solutions to reduce medication errors and healthcare-associated infections. Healthcare-associated infections may include central line-associated bloodstream infections, catheter-associated urinary tract infections, ventilator-associated pneumonia, or surgical site infections. In addition, your project should consider leveraging AI, robotization, and other emerging technologies (not limited to virtual reality, mixed reality, and extended reality) to increase the transition from task-oriented activities to solution-based care of patients.</div>}
          img={CILDI}
        />
        {/* BIG IDEA: Best Technology-Enabled Patient Safety Solutions Track */}
        <TrackCard
          trackName="BIG IDEA: Best Technology-Enabled Patient Safety Solutions"
          description={
            <div><p>We’re in search of bold new thinking. This is a call to the NEXT GENERATION. An invitation to solve the problem of medical error that harms millions of U.S. patients and costs billions of dollars every year. We’re calling on MedHacks teams to envision the best technology-enabled patient safety solution that has the potential to avert patient harm and save lives. Your hack must align with one of the following four leading patient safety challenges facing health care across the continuum of care.
              </p><br/>
              <ol type="1" className="text-left pl-5">
                <li> * Procedural/surgical errors (e.g. pneumothorax, excessive bleeding, intestinal perforation)</li>
                <li>  * Errors during routine patient care (e.g. pressure ulcers, blood clots, falls)</li>
                <li>  * Infections (e.g. respiratory infections, surgical site infections, central line-associated blood stream infections)</li>
                <li>  * Diagnostic safety (e.g. missed, delayed or wrong diagnoses)</li>
              </ol><br/>
              <p>We encourage teams to consider autonomous patient safety solutions, those where the automation of an existing technology can improve patient safety by easing the burden on our healthcare workforce that is burning out and turning over at astonishing rates that are not sustainable.</p></div>
          }
          img={PSTC}
        />
      </div>
    </div>
  );
};

export default Tracks;
