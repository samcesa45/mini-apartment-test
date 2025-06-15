'use client';
import { apartments } from '@/constants/data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function ApartmentView() {
  const { towerId } = useParams();
  const { floorId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Floor {floorId} - Tower {towerId}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apartments.map((apt) => (
          <Link
            key={apt.id}
            href={`/towers/${towerId}/${floorId}/${apt.id}`}
            className="h-full"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col justify-between h-full bg-white shadow-md p-4 transition-all rounded-lg"
            >
              <div className="w-full aspect-video mb-2 relative">
                <Image
                  src={apt.thumbnail}
                  alt="Apartment Thumbnail"
                  className="rounded-md object-cover"
                  fill
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{apt.unitType}</h3>
                <p className="text-sm text-gray-700">
                  {apt.area} sqm • {apt.rooms} rooms
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
