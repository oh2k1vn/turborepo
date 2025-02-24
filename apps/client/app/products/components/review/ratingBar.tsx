import * as React from 'react';

export interface RatingBarProps {
  label: string;
  value: number;
  width: number;
}

export const RatingBar: React.FC<RatingBarProps> = ({ label, value, width }) => {
  return (
    <div className="flex items-center w-full gap-4 bg-white">
      <div className="text-sm md:text-lg font-medium text-black w-[130px] text-left shrink-0">
        {label}
      </div>

      <div className="flex items-center w-full bg-zinc-300 rounded-2xl overflow-hidden h-[5px]">
        <div
          className="bg-amber-300 h-full rounded-2xl"
          style={{ width: `${width}%` }}
        />
      </div>

      <div className="text-base font-medium text-black opacity-40 w-[50px] text-right shrink-0">
        {value}
      </div>
    </div>
  );
};
