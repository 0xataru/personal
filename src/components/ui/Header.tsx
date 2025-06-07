// import Tiger from "./Tiger";
import AnimeCharacters from "./AnimeCharacters";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-purple-900 py-24 relative h-[50vh] flex items-center">
      <AnimeCharacters />
      <div className="max-w-6xl mx-auto px-8 text-center relative z-20 w-full">
        {/* <div className="mb-8">
          <Tiger />
        </div> */}
        <h1 className="text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent font-inter tracking-tight">
          Mark Raiter
        </h1>
        <p className="text-3xl lg:text-4xl text-gray-300 mb-12 font-light tracking-wide">
          rationalist | swe | anime fan
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <div className="px-8 py-4 bg-purple-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-300 font-medium text-lg">Backend Development</span>
          </div>
          <div className="px-8 py-4 bg-blue-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-300 font-medium text-lg">Cloud Infrastructure</span>
          </div>
          <div className="px-8 py-4 bg-amber-600/20 rounded-full border border-amber-500/30 backdrop-blur-sm">
            <span className="text-amber-300 font-medium text-lg">B2B SaaS</span>
          </div>
        </div>
      </div>
    </header>
  );
} 