import { techStackData } from "@/data/techStack";
import { TechChipGroup, SkillsAnimeCharacters } from "@/components";
import Link from "next/link";

const skillCategories = Object.values(techStackData);

function SkillSection({ category }: { category: typeof skillCategories[0] }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="text-2xl font-bold text-white">{category.name}</h3>
      </div>
      <TechChipGroup technologies={category.technologies} borderColor={category.borderColor} />
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <SkillsAnimeCharacters />

      <div className="relative z-20 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here&apos;s my technical expertise of software development
          </p>
        </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
           {skillCategories.map((category, index) => (
             <div key={category.name} className={`${
               skillCategories.length === 4 && index === 3 ? 'xl:col-start-2' : ''
             }`}>
               <SkillSection category={category} />
             </div>
           ))}
         </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur rounded-xl p-8 border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Download My Resume
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements in a downloadable PDF format.
          </p>
          <a
            href="/cv.pdf"
            download="Mark_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV.pdf
          </a>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 