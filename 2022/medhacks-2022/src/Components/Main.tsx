import { useEffect, useState } from 'react';
import { ReactComponent as BaloonsSVG } from '../assets/baloons.svg';
import { ReactComponent as PlaneSVG } from '../assets/plane_no_bg.svg';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import About from './About';
import FAQ from './FAQ';
import Footer from './Footer';
import Landing from './Landing';
import Schedule from './Schedule';
import Spacer from './Spacer';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Tracks from './Tracks';

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

  const getBaloonsScrollModifier = () => {
    return (
      ((document.documentElement.scrollTop / document.body.clientHeight) *
        document.body.clientWidth) /
        2 -
      20
    );
  };

  return (
    <div style={{ height: 'min-content', overflow: 'hidden' }}>
      {/* Scroll Bar */}
      <div
        id="scrollbar"
        className="fixed top-[0px] z-50 left-0"
        style={{ width: progress, visibility: progress ? 'visible' : 'hidden' }}
      >
        <PlaneSVG
          id="plane-scroll"
          className="absolute top-[-50px] scale-[30%]"
          style={{ left: progress - 80 }}
        />
        <div className="shadow w-full h-[10px] bg-gradient-to-r from-[#E63F21] to-[#FCE689]"></div>
      </div>
      <LogoSVG className="fixed top-[10px] left-[0] w-[10%] h-auto z-30"/>

      {/* Page Contents */}
      {(!document.documentElement.scrollTop ||
        getBaloonsScrollModifier() < 208) && (
        <BaloonsSVG
          className={`w-[97.5%] z-0 absolute`}
          style={{
            top: `${
              document.documentElement.scrollTop &&
              getBaloonsScrollModifier() > 8
                ? getBaloonsScrollModifier()
                : 8
            }rem`,
          }}
        />
      )}
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
      <div className="bg-gradient-to-b from-[#93D8FF] to-[#5fbef5]">
        <Schedule />
        <Spacer sectionId="sponsors" />
      </div>
      <div className="bg-gradient-to-b from-[#5fbef5] to-[#2E6CC9]">
        <FAQ />
        <Spacer sectionId="faq" />
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
