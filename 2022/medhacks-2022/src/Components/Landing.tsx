import { ReactComponent as PlaneSVG } from '../assets/plane.svg';
import { ReactComponent as IslandSVG } from '../assets/island.svg';
import { ReactComponent as AboutSVG } from '../assets/about.svg';
import { ReactComponent as SponsorsSVG } from '../assets/sponsors.svg';
import { ReactComponent as SpeakersSVG } from '../assets/speakers.svg';
import { ReactComponent as ScheduleSVG } from '../assets/schedule.svg';
import { ReactComponent as FaqSVG } from '../assets/faq.svg';
import { ReactComponent as TracksSVG } from '../assets/tracks.svg';
import { ReactComponent as ApplySVG } from '../assets/apply.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { ReactComponent as Cloud1SVG } from '../assets/cloud 1.svg';
import { ReactComponent as Cloud2SVG } from '../assets/cloud 2.svg';

enum SectionID {
  HOME = '#home',
  ABOUT = '#about',
  TRACKS = '#tracks',
  APPLY = '#apply',
  SPEAKERS = '#speakers',
  SPONSORS = '#sponsors',
  FAQ = '#faq',
  SCHEDULE = '#schedule',
}

const Landing = () => {
  return (
    <div className="w-full h-[screen]">
      <div className="h-screen w-full overflow-x-clip bg-cover relative">
        <div className="absolute top-0 w-screen h-screen flex flex-col z-20">
          <PlaneSVG
            className="w-[60%] mx-[20%] transition ease-in-out delay-150 hover:scale-105 duration-300 mt-5 max-h-[20%] h-min z-20"
            // style={{ marginRight: document.body.scrollHeight + 'rem' }}
          />
          <IslandSVG className="w-[50%] mx-[25%] my-auto h-min z-20" />
          <Link to={SectionID.ABOUT}>
            <AboutSVG className="absolute min-w-[8%] w-[4rem] h-min left-[25.55%] top-[43vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />
          </Link>
          <Link to={SectionID.SPONSORS}>
            <SponsorsSVG className="absolute min-w-[10%] w-[5rem] h-min left-[30.15%] top-[30vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />
          </Link>
          <Link to={SectionID.SPEAKERS}>
            <SpeakersSVG className="absolute min-w-[10%] w-[5rem] h-min left-[33%] top-[59vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />{' '}
          </Link>
          <Link to={SectionID.TRACKS}>
            <TracksSVG className="absolute min-w-[8%] w-[4rem] h-min left-[66.65%] top-[42vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />{' '}
          </Link>
          <Link to={SectionID.FAQ}>
            <FaqSVG className="absolute min-w-[5%] w-[3rem] h-min left-[60.4%] top-[59.5vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />{' '}
          </Link>
          <Link to={SectionID.SCHEDULE}>
            <ScheduleSVG className="absolute min-w-[10%] w-[5rem] h-min left-[59.25%] top-[30vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20" />{' '}
          </Link>
          <ApplySVG
            className="absolute min-w-[10%] w-[5rem] h-min left-[45%] top-[43vh] top-0 mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer z-20"
            onClick={() => {
              window.location.href = 'http://apply.medhacks.io';
            }}
          />
        </div>
      </div>
      {/* <div
        className="h-[62.5rem] w-full overflow-x-clip"
        style={{ backgroundImage: `url(${map})` }}
      >
        Map
      </div> */}
      <div
        className="h-screen w-cover overflow-x-clip bg-cover pt-[5%] relative top-[100px] z-20"
        // style={{ backgroundImage: `url(${bg})` }}
      >
        <Cloud1SVG className="w-[100%] mx-auto h-min" />
        <Cloud2SVG className="w-[100%] mx-auto transition ease-in-out delay-100 hover:scale-110 duration-300 h-min absolute top-10 left-0" />
      </div>
    </div>
  );
};

export default Landing;
