'use client';

export default function AnimeCharacters() {
  const characters = [
    {
      id: 'frieren',
      name: 'Frieren',
      anime: 'Sousou no Frieren',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e45b8c2-f55b-45e5-8ad4-b19e6b2b6dcb/dg2oqjh-b1a8b347-8651-4be8-83e5-1b5c4c7a0d7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllNDViOGMyLWY1NWItNDVlNS04YWQ0LWIxOWU2YjJiNmRjYlwvZGcyb3FqaC1iMWE4YjM0Ny04NjUxLTRiZTgtODNlNS0xYjVjNGM3YTBkN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0',
      position: 'left-8 top-20',
    },
    {
      id: 'akame',
      name: 'Akame',
      anime: 'Akame ga Kill!',
      imageUrl: 'https://www.pngmart.com/files/23/Akame-PNG-Transparent-Image.png',
      position: 'right-8 top-32',
    },
    {
      id: 'nezuko',
      name: 'Nezuko',
      anime: 'Demon Slayer',
      imageUrl: 'https://www.pngall.com/wp-content/uploads/13/Nezuko-PNG-Pic.png',
      position: 'left-12 bottom-40',
    },
    {
      id: 'anya',
      name: 'Anya Forger',
      anime: 'Spy x Family',
      imageUrl: 'https://www.pngmart.com/files/23/Anya-Forger-PNG-Picture.png',
      position: 'right-12 bottom-20',
    },
  ];

  return (
    <div className="hidden xl:block fixed inset-0 pointer-events-none z-0">
      {characters.map((character) => (
        <div
          key={character.id}
          className={`absolute ${character.position} opacity-20 hover:opacity-40 transition-all duration-500 pointer-events-auto`}
          style={{
            background: `radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)`,
          }}
        >
          <div className="relative group">
            <div className="animate-float">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-32 h-40 object-contain drop-shadow-lg"
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden text-6xl">
                {character.id === 'frieren' && '🧙‍♀️'}
                {character.id === 'akame' && '⚔️'}
                {character.id === 'nezuko' && '👹'}
                {character.id === 'anya' && '🔮'}
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Tooltip */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
              <div className="font-semibold">{character.name}</div>
              <div className="text-xs text-gray-300">{character.anime}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 