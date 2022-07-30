import { FC } from 'react';
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
  description: string;
  name: string;
}> = ({ imageUrl, description, name }) => {
  return (
    <div className="justify-center h-5/6 w-96">
      <div className="rounded-lg">
        <a href="#!">
          <img className="rounded-lg object-fill" src={imageUrl} alt="" />
        </a>
        <div className="p-6">
          {/* <h5 className="text-xl text-white font-medium mb-2 font-sans">{name}</h5> */}
          <p className="text-base text-white mb-4 font-sans">{description}</p>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @returns
 */
const Speakers: FC = () => {
  const speakerData: SpeakerData[] = [
    {
      // Portrait 1
      imageUrl:
        'https://image.shutterstock.com/image-photo/portrait-young-beautiful-cute-cheerful-260nw-666258808.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Person 1',
    },
    {
      // Portrait 2
      imageUrl:
        'https://image.shutterstock.com/image-photo/indoor-portrait-beautiful-brunette-young-260nw-640005220.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Person 2',
    },
    {
      // Portrait 3
      imageUrl:
        'https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?k=20&m=685132245&s=612x612&w=0&h=oKxgMF_dOhoGJtd_YxhbmpK4qFvcl-0s0NFmxuh7IKA=',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Person 3',
    },
    {
      // Portrait 4
      imageUrl:
        'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?s=612x612',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Person 4',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Speakers Header */}
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <SpeakersHeaderSVG className="scale-[50%]" />
      </div>

      <div className="font-sans text-white text-2xl p-4">
        Stay tuned for this year’s speakers!
      </div>

      {/* Speaker Cards */}
      <div className="flex flex-wrap items-center justify-center w-full h-fit">
        {speakerData.map((speaker) => (
          <div className="m-6">
            <SpeakerPortrait
              imageUrl={speaker.imageUrl}
              description={speaker.description}
              name={speaker.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
