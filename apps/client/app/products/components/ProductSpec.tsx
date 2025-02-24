import * as React from 'react';
import { Specification } from '@/types/data';

interface ProductSpecProps {
  spec: Specification;
}
export function ProductSpec({ spec }: ProductSpecProps) {
  return (
    <div className="flex flex-1 gap-2 items-center px-2 py-4 rounded-lg bg-zinc-100 min-w-max">
      <img
        loading="lazy"
        src={spec.icon}
        alt={`${spec.name} icon`}
        className="object-contain my-auto w-6"
      />
      <div className="flex-1 my-auto flex flex-col items-start">
        <span className="text-stone-300">{spec.name}</span>
        <span>{spec.value}</span>
      </div>
    </div>
  );
}