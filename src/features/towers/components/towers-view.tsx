'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

export default function TowersView() {
  const { towerId } = useParams();
  const floors = Array.from({ length: 15 }, (_, i) => 15 - i);
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Select a floor in Tower {towerId}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {floors.map((floor) => (
          <Link
            key={floor}
            href={`/towers/${towerId}/${floor}`}
            className="bg-gray-100 hover:bg-gray-300 rounded p-4 text-center"
          >
            Floor {floor}
          </Link>
        ))}
      </div>
    </div>
  );
}
