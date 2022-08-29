import clsx from 'clsx';
import { useState } from 'react';

export default function FAQCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="font-['Mulish']">
      <button
        className={clsx(
          'px-2 py-3 w-full md:text-xl sm:text-lg hover:bg-red-500 font-medium transition-colors duration-150 ease-in text-white bg-[#E63F21] select-none',
          {
            'rounded-t': isExpanded,
            rounded: !isExpanded,
          },
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {question}
      </button>
      {isExpanded ? (
        <div
        className="text-black md:text-lg sm:text-md pl-[5%] pr-[5%] bg-[#0000000F] pt-10 pb-10"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ) : null}
    </div>
  );
}
