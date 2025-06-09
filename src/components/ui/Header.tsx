import AnimeCharacters from "./AnimeCharacters";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-purple-900 py-12 sm:py-16 lg:py-24 relative min-h-[40vh] sm:min-h-[45vh] lg:h-[50vh] flex items-center">
      <AnimeCharacters />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent font-inter tracking-tight leading-tight">
          Mark Raiter
        </h1>
        <p className="text-sm text-gray-300 mb-6 font-light tracking-wide px-2 block sm:hidden">
          Rationalist | SWE | Anime Fan
        </p>
        <p className="text-xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 font-light tracking-wide px-4 hidden sm:block">
          Rationalist | Software Engineer | Anime Fan
        </p>
        <div className="flex flex-wrap sm:flex-row justify-center gap-1.5 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 px-1">
          <div className="px-1 sm:px-6 lg:px-8 py-0.5 lg:py-4 bg-purple-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-300 font-medium text-xxs sm:text-base lg:text-lg">Backend Development</span>
          </div>
          <div className="px-1 sm:px-6 lg:px-8 py-0.5 lg:py-4 bg-blue-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-300 font-medium text-xxs sm:text-base lg:text-lg">Cloud Infrastructure</span>
          </div>
          <div className="px-1 sm:px-6 lg:px-8 py-0.5 lg:py-4 bg-amber-600/20 rounded-full border border-amber-500/30 backdrop-blur-sm">
            <span className="text-amber-300 font-medium text-xxs sm:text-base lg:text-lg">B2B SaaS</span>
          </div>
        </div>
      </div>
    </header>
  );
} 