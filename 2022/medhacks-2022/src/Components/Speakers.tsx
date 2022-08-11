import { FC, useState } from 'react';
import internal from 'stream';
import { ReactComponent as SpeakersHeaderSVG } from '../assets/speakers_header.svg';

/**
 *
 */
type SpeakerData = {
  imageUrl: string;
  description: string;
  name: string;
};

/**
 * @description a component for each portrait card containing the image, name, and description of a speaker
 *
 * @param imageUrl: the URL for the image on the internet
 * @param description: description for the person
 * @param name: person's name
 * @returns React function component for a portrait
 */
const SpeakerPortrait: FC<{
  imageUrl: string;
  index: number;
  setHover: Function;
}> = ({ imageUrl, index, setHover }) => {
  return (
    <div
      className="relative rounded-2xl border-2 border-white hover:border-rose-600 w-32 sm:w-64 mx-auto"
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(-1)}
    >
      <img className="object-contain" src={imageUrl} alt="" />
    </div>
  );
};

const SpeakerDescription: FC<{
  index: number,
  speakerData: SpeakerData[]
}> = ({ index, speakerData }) => {
  const boxStyling = "p-[5%] bg-[#5DA6DC]/[.6] border-2 rounded-3xl border-[#5DA6DC]/50 overflow-auto";
  return (
    index === -1 ? 
    <div className={boxStyling}>
      <div className='font-sans text-white md:text-2xl sm:text-lg align-middle'>
        Above are the speakers for MedHacks.
        You can hover over them to read more about each speaker!
      </div>
    </div>
    :
    <div className={boxStyling}>
      <div className='font-sans text-white md:text-2xl sm:text-lg leading-loose'>
        {speakerData[index].name}
      </div>
      <div className='font-sans text-white md:text-2xl sm:text-lg pt-4'>
        {speakerData[index].description}
      </div>
    </div>
  );
}

/**
 *
 * @returns
 */
const Speakers: FC = () => {
  const speakerData: SpeakerData[] = [
    {
      // Portrait 1
      imageUrl:
        'https://www.illumination.com/wp-content/uploads/2020/02/YoungGru.png',
      description:
        'Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1', 
      name: 'Person 1',
    },
    {
      // Portrait 2
      imageUrl:
        'https://www.illumination.com/wp-content/uploads/2020/02/YoungGru.png',
      description:
        'Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2', 
      name: 'Person 2',
    },
    {
      // Portrait 3
      imageUrl:
        'https://www.illumination.com/wp-content/uploads/2020/02/YoungGru.png',
      description:
        'Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3', 
      name: 'Person 3',
    },
    {
      // Portrait 4
      imageUrl:
        'https://www.illumination.com/wp-content/uploads/2020/02/YoungGru.png',
      description:
        'Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4', 
      name: 'Person 4',
    },
  ];

  const defaultHoverList = [];
  for (const ignored in speakerData) {
    defaultHoverList.push(false);
  }

  const [hover, setHover] = useState<number>(-1);

  return (
    <div className="w-full flex flex-col">
      {/* Speakers Header */}
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <SpeakersHeaderSVG className="w-[40%] min-w-[350px] max-w-[500px] h-auto"  />
      </div>

      <div className="font-sans text-white text-white md:text-2xl sm:text-lg pl-[2%] pr-[2%] bg-[#00000010] mr-[5%] ml-[5%] mt-10 pt-10 pb-10 rounded-3xl">
        Stay tuned for this year’s speakers!
      </div>

      {/* Speaker Cards */}
      {/* <div className="flex flex-wrap items-center justify-center w-full h-fit object-contain">
        {speakerData.map((speaker, index) => (
          <div className="m-[2%]">
            <SpeakerPortrait
              imageUrl={speaker.imageUrl}
              index={index}
              setHover={setHover}
            />
          </div>
        ))}
      </div> */}

      {/* Speaker Description */}
      {/* <div className='px-[5%] align-center '>
        <SpeakerDescription
          index={hover}
          speakerData={speakerData}
        />
      </div> */}
    </div>
  );
};

export default Speakers;
