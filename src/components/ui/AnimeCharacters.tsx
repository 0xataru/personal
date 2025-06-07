'use client';

export default function AnimeCharacters() {
  const characters = [
    {
      id: 'character1',
      name: 'Character 1',
      anime: 'Anime',
      imageUrl: '/anime-characters/char1.png',
      position: 'left-8 top-20',
    },
    {
      id: 'character2',
      name: 'Character 2',
      anime: 'Anime',
      imageUrl: '/anime-characters/char2.png',
      position: 'right-8 top-20',
    },
    {
      id: 'character3',
      name: 'Character 3',
      anime: 'Anime',
      imageUrl: '/anime-characters/char3.png',
      position: 'left-8 bottom-20',
    },
    {
      id: 'character4',
      name: 'Character 4',
      anime: 'Anime',
      imageUrl: '/anime-characters/char4.png',
      position: 'right-8 bottom-20',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 xl:block hidden">
      {characters.map((character) => (
        <div
          key={character.id}
          className={`absolute ${character.position} group`}
        >
          {/* Character Image */}
          <div className="relative">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="w-48 h-56 object-contain opacity-80 group-hover:opacity-95 transition-opacity duration-300 animate-float drop-shadow-2xl"
              onError={(e) => {
                // Fallback к эмодзи если изображение не загрузится
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            
            {/* Fallback эмодзи (скрыт по умолчанию) */}
            <div 
              className="w-48 h-56 flex items-center justify-center text-8xl animate-float drop-shadow-2xl opacity-80 group-hover:opacity-95 transition-opacity duration-300"
              style={{ display: 'none' }}
            >
              {character.id === 'character1' && '✨'}
              {character.id === 'character2' && '🌟'}
              {character.id === 'character3' && '💫'}
              {character.id === 'character4' && '⭐'}
            </div>

            {/* Градиентный фон */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
            
            {/* Плавающие частицы */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-3 h-3 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
              <div className="absolute top-6 right-3 w-2 h-2 bg-purple-300/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-3 left-6 w-2.5 h-2.5 bg-pink-300/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900/90 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="font-semibold">{character.name}</div>
              <div className="text-gray-300 text-xs">{character.anime}</div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
          </div>
        </div>
      ))}
    </div>
  );
} 