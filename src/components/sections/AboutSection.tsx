import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white border-b border-gray-800 pb-3 sm:pb-4">
        About Me
      </h2>
      <div className="bg-gray-900/50 backdrop-blur rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-800">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Hello there! My name is <span className="text-white font-semibold">Mark</span>, I&apos;ve been living on Earth for ~30 years, and I am a software engineer with a passion for <span className="text-white font-medium">blazing fast technologies 🦀</span> 
          </p>
          
          <p className="text-gray-300 text-base sm:text-base leading-relaxed">
            I specialize in <span className="text-blue-400 font-medium">Golang</span> and <span className="text-orange-400 font-medium">Rust</span>, building scalable B2B SaaS solutions and cloud infrastructure. You could get to know me better through my contributions to various open source projects on <span className="text-white font-medium">GitHub</span>, where I enjoy creating tools that simplify developers&apos; work.
          </p>
          
          <p className="text-gray-300 text-base sm:text-base leading-relaxed">
            Currently, I&apos;m actively working on some exciting backend projects using modern architectures and cloud technologies. When I&apos;m not coding, you&apos;ll probably find me watching <span className="text-pink-400 font-medium">anime</span> or reading <span className="text-yellow-400 font-medium">manga</span> — two of my favorite ways to unwind!
          </p>
          
          <p className="text-gray-300 text-base sm:text-base leading-relaxed">
            It&apos;s a pleasure to meet you here, and I hope you enjoy exploring my work. Feel free to reach out if you&apos;d like to chat about technology, collaborate on projects, or just discuss the latest anime series! 😊
          </p>

          <div className="pt-4 sm:pt-6">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Let&apos;s collaborate
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 