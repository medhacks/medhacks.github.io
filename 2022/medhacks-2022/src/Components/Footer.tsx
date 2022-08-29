import { FC } from 'react';
import { ReactComponent as LogoTextSvg } from '../assets/medhacks red.svg';
import { ReactComponent as LogoSVG } from '../assets/logo_plain.svg';
import footerLogo from '../assets/medhacks_logo.png'
const Footer: FC = () => {
  return (
    <div className="flex z-20 w-[90%] justify-center h-auto m-auto pb-[20px]">
      <div>
          <img src={footerLogo} alt="Medhacks Logo" />
      </div>
    </div>
  );
};

export default Footer;
