import { FC } from 'react';

const Spacer: FC<{
  sectionId: string;
}> = ({ sectionId }) => {
  return <div id={sectionId} className="h-20"></div>;
};

export default Spacer;
