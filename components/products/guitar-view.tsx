"use client";

import { Guitar } from "@/app/products/page";

type GuitarViewProps = {
  guitar: Guitar;
};

export default function GuitarView({ guitar }: GuitarViewProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          {guitar.make} {guitar.model}
        </h2>
        <p className="text-gray-800 text-lg mb-2">
          <span className="font-semibold">Color:</span> {guitar.colour}
        </p>
        <p className="text-green-700 font-bold text-xl mb-4">
          ${guitar.price.toLocaleString()}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {guitar.description}
        </p>
      </div>
    </div>
  );
}
