import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { PhotoView } from 'react-photo-view';
import { twMerge } from 'tailwind-merge';

// Define the type for the props of PollOption component
interface PollOptionProps {
  _id: string;
  option: string;
  optionImage?: string;
}

const PollOption: React.FC<PollOptionProps> = ({ _id, option, optionImage }) => {
  return (
    <RadioGroup.Option
      value={_id}
      className={({ active, checked }) =>
        twMerge(
          clsx(
            'cursor-pointer rounded-lg shadow-sm focus:outline-none p-2 sm:p-3 border border-primary-700 transition-colors bg-primary-800 w-full',
            {
              'border-accent-500': active,
              'bg-accent-500/25 text-white border-2 border-accent-500': checked,
            }
          )
        )
      }>
      {({ checked }) => (
        <>
          <div className="space-y-2 w-full">
            <div className="flex justify-between items-center w-full">
              <RadioGroup.Label
                as="p"
                className={clsx(
                  'text-lg ps-1 w-full break-all',
                  checked && 'text-white'
                )}>
                {option}
              </RadioGroup.Label>
              {checked && (
                <BsCheckCircleFill className="w-5 h-5 text-accent-500" />
              )}
            </div>
            {optionImage ? (
              <PhotoView src={optionImage}>
                <img
                  onClick={(e) => e.preventDefault()}
                  className="object-cover object-center mt-2 w-full h-40 rounded-lg sm:h-56"
                  src={optionImage}
                  alt={option}
                />
              </PhotoView>
            ) : null}
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default PollOption;
