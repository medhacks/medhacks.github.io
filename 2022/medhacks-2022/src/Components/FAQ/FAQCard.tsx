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
    <div className="w-[400px] font-sans">
      <button
        className={clsx(
          'px-2 py-3 w-full hover:bg-red-500 font-medium transition-colors duration-150 ease-in text-white bg-red-400 select-none',
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
          className="px-5 py-4 text-white bg-opacity-70 bg-slate-700"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ) : null}
    </div>
  );
}
