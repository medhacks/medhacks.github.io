import { FC } from 'react';

const Spacer: FC<{
  sectionId: string;
}> = ({ sectionId }) => {
  return <div className="h-20" id={sectionId}></div>;
};

export default Spacer;
