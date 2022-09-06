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
      className="relative  w-32 sm:w-64 mx-auto"
      // rounded-2xl border-2 border-white hover:border-rose-600
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
  const boxStyling = "";
  return (
    index === -1 ?
      <div className={boxStyling}>
        <div className="font-['Mulish'] text-black md:text-2xl sm:text-lg align-middle">
          {/* Above are the speakers for MedHacks.
        You can hover over them to read more about each speaker! */}
          <div className="font-['Mulish'] text-black md:text-2xl sm:text-lg leading-loose font-bold">
            JASON E. FARLEY, PHD, MPH, ANP-BC
          </div>
          <div className="font-['Mulish'] text-black md:text-xl sm:text-m pt-4">
            Jason Farley is a world-renowned nurse scientist and the inaugural Leadership and Innovation Endowed Chair at the Johns Hopkins University School of Nursing. He directs the Center for Infectious Disease and Nursing Innovation. As an Infectious Disease Nurse Epidemiologist and a Nurse Practitioner in the Division of Infectious Diseases at The Johns Hopkins School of Medicine, his clinical practice in the John Bartlett Specialty Practice spans HIV prevention, treatment and associated co-infections. A primary area of his infectious disease research portfolio focuses on enhancing care models for patients with TB and HIV in South Africa, which will be the focus of his talk during the hackathon!
          </div>
        </div>
      </div>
      :
      <div className={boxStyling}>
        <div className="font-['Mulish'] text-black md:text-2xl sm:text-lg leading-loose font-bold">
          {speakerData[index].name}
        </div>
        <div className="font-['Mulish'] text-black md:text-xl sm:text-m pt-4">
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
        'https://nursing.jhu.edu/sebin/b/r/Jason-Farley.jpg',
      description:
        'Jason Farley is a world-renowned nurse scientist and the inaugural Leadership and Innovation Endowed Chair at the Johns Hopkins University School of Nursing. He directs the Center for Infectious Disease and Nursing Innovation. As an Infectious Disease Nurse Epidemiologist and a Nurse Practitioner in the Division of Infectious Diseases at The Johns Hopkins School of Medicine, his clinical practice in the John Bartlett Specialty Practice spans HIV prevention, treatment and associated co-infections. A primary area of his infectious disease research portfolio focuses on enhancing care models for patients with TB and HIV in South Africa, which will be the focus of his talk during the hackathon!',
      name: 'JASON E. FARLEY, PHD, MPH, ANP-BC',
    }
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
        <SpeakersHeaderSVG className="w-[40%] min-w-[300px] max-w-[500px] h-auto" />
      </div>

      <div className='p-[1%] bg-[#FFFFFF3F] border-2 rounded-xl border-[#FFF]/50 overflow-auto w-[70%] m-auto'>
        <div className="bg-[#E63F21] p-2 rounded-xl">
          <div
            className="w-full border-4 rounded-xl border-white ">

            <h5 className="text-[#FCE689] uppercase italic md:text-2xl sm:text-md text-center leading-tight font-bold font-sans p-2">
              Keynote speaker
            </h5>
          </div>
        </div>

        {/* Speaker Cards */}
        <div className="flex flex-wrap items-center justify-center w-full h-fit object-contain">
          {speakerData.map((speaker, index) => (
            <div className="m-[2%] w-[100%] h-auto">
              <SpeakerPortrait
                imageUrl={speaker.imageUrl}
                index={index}
                setHover={setHover}
              />
            </div>
          ))}
        </div>

        {/* Speaker Description */}
        <div className='px-[5%] align-center '>
          <SpeakerDescription
            index={hover}
            speakerData={speakerData}
          />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
