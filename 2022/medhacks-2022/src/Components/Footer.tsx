import { FC } from 'react';
import { ReactComponent as LogoSvg } from '../assets/mh_logo_text.svg';

const Footer: FC = () => {
  return (
    <div className="scale-[50%]">
      <LogoSvg/>
    </div>
  );
};

export default Footer;