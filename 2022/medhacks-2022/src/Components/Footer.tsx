import { FC } from 'react';
import { ReactComponent as LogoTextSvg } from '../assets/medhacks red.svg';
import { ReactComponent as LogoSVG } from '../assets/logo_plain.svg';
import footerLogo from '../assets/medhacks_logo.png'
const Footer: FC = () => {
  return (
    <div className="flex z-20 h-[30vh]">
      <div className="h-auto">
          <img src={footerLogo} alt="Medhacks Logo" />
      </div>
    </div>
  );
};

export default Footer;
