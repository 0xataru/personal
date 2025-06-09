'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SkillsAnimeCharacters() {
  const [visibleCharacter, setVisibleCharacter] = useState(-1);

  const characters = [
    {
      id: 'character1',
      imageUrl: '/anime-characters/char1.png',
      position: 'left-1 sm:left-4 lg:left-8 top-1/3 sm:top-1/4',
      emoji: '🧙‍♀️'
    },
    {
      id: 'character2', 
      imageUrl: '/anime-characters/char2.png',
      position: 'right-1 sm:right-4 lg:right-8 top-2/3 sm:top-1/3',
      emoji: '⚔️'
    },
    {
      id: 'character3',
      imageUrl: '/anime-characters/char3.png', 
      position: 'left-1 sm:left-4 lg:left-8 bottom-1/3 sm:bottom-1/4',
      emoji: '👹'
    },
    {
      id: 'character4',
      imageUrl: '/anime-characters/char4.png',
      position: 'right-1 sm:right-4 lg:right-8 bottom-1/6 sm:bottom-1/3',
      emoji: '🎀'
    },
  ];

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setVisibleCharacter(0);
    }, 500);

    const interval = setInterval(() => {
      setVisibleCharacter((prev) => (prev + 1) % characters.length);
    }, 3000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [characters.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {characters.map((character, index) => (
        <div
          key={character.id}
          className={`absolute ${character.position} group transition-all duration-[2000ms] ease-in-out transform-gpu ${
            index === visibleCharacter 
              ? 'opacity-60 sm:opacity-85 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            <Image
              src={character.imageUrl}
              alt={character.id}
              width={500}
              height={500}
              className="w-24 h-32 sm:w-40 sm:h-52 lg:w-72 lg:h-96 object-contain group-hover:opacity-95 transition-all duration-300 drop-shadow-2xl filter group-hover:brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            
            <div 
              className="w-24 h-32 sm:w-40 sm:h-52 lg:w-72 lg:h-96 flex items-center justify-center text-4xl sm:text-6xl lg:text-[12rem] drop-shadow-2xl group-hover:opacity-95 transition-all duration-300"
              style={{ display: 'none' }}
            >
              {character.emoji}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 