import About from './About';
import Landing from './Landing';
import Speakers from './Speakers';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Spacer from './Spacer';

export default function Main() {
  return (
    <div>
      <Landing />
      <Spacer sectionId='about'/>
      <About />
      <Spacer sectionId='tracks'/>
      <Tracks />
      <Spacer sectionId='speakers'/>
      <Speakers />
      <Spacer sectionId='schedule'/>
      <Schedule />
      <Spacer sectionId='footer'/>
    </div>
  );
}
