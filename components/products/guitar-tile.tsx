"use client";

import { Guitar } from "@/app/products/page";

type GuitarTileProps = {
  guitar: Guitar;
};

export default function GuitarTile({ guitar }: GuitarTileProps) {
  return (
    <div className="h-40 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-indigo-600 mb-2 line-clamp-2">
          {guitar.make} {guitar.model}
        </h2>
        <p className="text-gray-700 text-sm">Color: {guitar.colour}</p>
      </div>
      <p className="text-green-700 font-semibold">${guitar.price.toLocaleString()}</p>
    </div>
  );
}
