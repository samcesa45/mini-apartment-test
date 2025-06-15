'use client';
import { apartments } from '@/constants/data';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

export default function LayoutView() {
  const { layoutId } = useParams();
  const layout = apartments.find((apt) => apt.id === layoutId);

  if (!layout) return <p className="text-center">Layout not found</p>;
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <Image
        src={layout.image}
        alt="Layout Image"
        className="mb-4 w-full"
        width={446}
        height={267}
      />
      <h2 className="text-2xl font-bold mb-2">{layout.unitType}</h2>
      <p>
        <strong>Area:</strong> {layout.area} sqm
      </p>
      <p>
        <strong>Rooms:</strong> {layout.rooms}
      </p>
    </div>
  );
}
