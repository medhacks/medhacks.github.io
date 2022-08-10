import { FC } from 'react';
import { ReactComponent as LogoTextSvg } from '../assets/medhacks red.svg';
import { ReactComponent as LogoSVG } from '../assets/logo_plain.svg';

const Footer: FC = () => {
  return (
    <div className="flex z-20 h-[30vh]">
      <LogoSVG className="w-[8%] h-auto"/>
      <LogoTextSvg className="w-[30%] h-auto" />
    </div>
  );
};

export default Footer;
