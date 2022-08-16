import { ReactComponent as FAQHeaderSvg } from '../../assets/faq_header.svg';
import data from './data';
import FAQCard from './FAQCard';

export default function FAQ() {
  return (
    <div className="flex flex-col items-center w-full">
      <FAQHeaderSvg className="w-[40%] min-w-[300px] max-w-[500px] h-auto" />
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2 pl-[5%] pr-[5%] pb-[1%] mt-10 w-full">
        {data.map(([question, answer]) => (
          <FAQCard question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}
