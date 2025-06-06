import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="/ataru.jpeg"
            alt="Ataru Avatar"
            fill
            className="rounded-full object-cover border-4 border-gray-700 shadow-2xl"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Mark Raiter
        </h1>
        <p className="text-xl text-gray-300 mb-6">
        rationalist | swe | anime fan
        </p>
      </div>
    </header>
  );
} 