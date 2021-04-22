import jDanaher from "./JohnDanaher/data";
import jDanaherPic from "./JohnDanaher/Danaher.png";
import pSLoh from "./PoShenLoh/data";
import pSLohPic from "./PoShenLoh/Poh.png";
import wRobins from "./WillRobins/data";
import wRobinsPic from "./WillRobins/Robins.png";

const speakers = [
  { ...jDanaher, image: jDanaherPic },
  { ...pSLoh, image: pSLohPic },
  { ...wRobins, image: wRobinsPic },
];
export default speakers;
