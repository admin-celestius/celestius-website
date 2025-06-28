import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const githubIds = [
  'adithyagenie',
  'adithyaa-s',
  'KRISHNASAKTHIESWAR',
  'arunkumar2645s',
  'Ajaybalajiprasad',
  'chorko',
  'AzimMohideen',
  'bhrahmesh',
  'arjun256900',
];

export function GitHubIds() {
  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {githubIds.map((id, index) => (
            <motion.div
              key={id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={`https://github.com/${id}.png`}
                  alt={`${id}'s profile`}
                  width={96}
                  height={96}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <a
                href={`https://github.com/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300"
              >
                {id}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}