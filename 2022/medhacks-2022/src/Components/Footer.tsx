import { FC } from 'react';
import { ReactComponent as LogoSvg } from '../assets/mh_logo_text.svg';

const Footer: FC = () => {
  return (
    <div className="w-full">
      <LogoSvg className="scale-[50%]"/>
    </div>
  );
};

export default Footer;