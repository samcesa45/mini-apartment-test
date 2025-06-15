'use client';
import { towers } from '@/constants/data';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

export default function TowersList() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 mt-14 px-4">
        {towers.map((tower) => (
          <Link key={tower.id} href={`/towers/${tower.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white w-[400px] flex flex-col justify-center h-[267px] transition-all shadow-md p-6 rounded-lg text-center cursor-pointer"
            >
              <h2 className="text-xl font-bold">{tower.name}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
