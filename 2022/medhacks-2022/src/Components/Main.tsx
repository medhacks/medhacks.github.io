import About from './About';
import Landing from './Landing';
import Speakers from './Speakers';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Spacer from './Spacer';
import Sponsors from './Sponsors';
import Footer from './Footer';

export default function Main() {
  return (
    <div>
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
