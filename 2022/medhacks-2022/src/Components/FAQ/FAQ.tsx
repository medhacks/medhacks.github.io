import { ReactComponent as FAQHeaderSvg } from '../../assets/faq_header.svg';
import data from './data';
import FAQCard from './FAQCard';

export default function FAQ() {
  return (
    <div className="flex flex-col items-center w-full px-[200px]">
      <FAQHeaderSvg />
      <div className="flex flex-wrap justify-center gap-5">
        {data.map(([question, answer]) => (
          <FAQCard question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}
