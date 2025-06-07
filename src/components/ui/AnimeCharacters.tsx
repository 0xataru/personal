'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AnimeCharacters() {
  const [visibleCharacter, setVisibleCharacter] = useState(0);

  const characters = [
    {
      id: 'character1',
      name: 'Frieren',
      anime: 'Beyond Journey\'s End',
      imageUrl: '/anime-characters/char1.png',
      position: 'left-8 top-1/2 -translate-y-1/2',
    },
    {
      id: 'character2',
      name: 'Akame',
      anime: 'Akame ga Kill',
      imageUrl: '/anime-characters/char2.png',
      position: 'right-8 top-1/2 -translate-y-1/2',
    },
    {
      id: 'character3',
      name: 'Nezuko',
      anime: 'Demon Slayer',
      imageUrl: '/anime-characters/char3.png',
      position: 'left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2',
    },
    {
      id: 'character4',
      name: 'Anya',
      anime: 'Spy x Family',
      imageUrl: '/anime-characters/char4.png',
      position: 'right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCharacter((prev) => (prev + 1) % characters.length);
    }, 5000); // Смена каждые 5 секунд

    return () => clearInterval(interval);
  }, [characters.length]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {characters.map((character, index) => (
        <div
          key={character.id}
          className={`absolute ${character.position} group transition-all duration-[2000ms] ease-in-out transform-gpu ${
            index === visibleCharacter 
              ? 'opacity-85 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            <Image
              src={character.imageUrl}
              alt={character.name}
              width={500}
              height={500}
              className="w-72 h-96 object-contain group-hover:opacity-95 transition-all duration-300 drop-shadow-2xl filter group-hover:brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            
            <div 
              className="w-72 h-96 flex items-center justify-center text-[12rem] drop-shadow-2xl group-hover:opacity-95 transition-all duration-300"
              style={{ display: 'none' }}
            >
              {character.id === 'character1' && '🧙‍♀️'}
              {character.id === 'character2' && '⚔️'}
              {character.id === 'character3' && '👹'}
              {character.id === 'character4' && '🎀'}
            </div>

            {/* Magical glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/90 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-500/30">
                <div className="font-semibold text-purple-200">{character.name}</div>
                <div className="text-gray-300 text-xs">{character.anime}</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 