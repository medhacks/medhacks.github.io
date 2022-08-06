import { useEffect, useState } from 'react';
import About from './About';
import Landing from './Landing';
import Speakers from './Speakers';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Spacer from './Spacer';
import Sponsors from './Sponsors';
import Footer from './Footer';
import { ReactComponent as PlaneSVG } from '../assets/plane_no_bg.svg';

export default function Main() {
  const [progress, setprogress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll < 100) {
        setprogress(0);
      } else {
        setprogress(
          (winScroll / document.body.clientHeight) *
            document.body.clientWidth *
            1.1,
        );
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Scroll Bar */}
      <div
        id="scrollbar"
        className="fixed top-[90px] z-20 left-0"
        style={{ width: progress, visibility: progress ? 'visible' : 'hidden' }}
      >
        <PlaneSVG
          id="plane-scroll"
          className="absolute top-[-50px] scale-[30%]"
          style={{ left: progress - 50 }}
        />
        <div className="shadow w-full h-[10px] bg-gradient-to-r from-[#E63F21] to-[#FCE689]"></div>
      </div>

      {/* Page Contents */}
      <div className="bg-gradient-to-b from-[#C7F2FF] to-[#FFCDC6]">
        <Landing />
        <Spacer sectionId="about" />
      </div>
      <div className="bg-gradient-to-b from-[#FFCDC6] to-[#FFC0B7]">
        <About />
        <Spacer sectionId="tracks" />
      </div>
      <div className="bg-gradient-to-b from-[#FFC0B7] to-[#93D8FF]">
        <Tracks />
        <Spacer sectionId="speakers" />
      </div>
      <div className="bg-[#93D8FF]">
        <Speakers />
        <Spacer sectionId="schedule" />
      </div>
      <div className="bg-gradient-to-b from-[#93D8FF] to-[#2E6CC9]">
        <Schedule />
        <Spacer sectionId="sponsors" />
      </div>
      <div className="bg-[#2E6CC9]">
        <Sponsors />
        <Spacer sectionId="footer" />
      </div>
      <div className="bg-[#175BB6]">
        <Footer />
      </div>
    </div>
  );
}
