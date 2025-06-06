import { techStackData } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-800 pb-4">
        Tech Stack
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.values(techStackData).map((category) => (
          <div key={category.name} className="bg-gray-900/50 backdrop-blur rounded-lg p-4 border border-gray-800">
            {/* Header with badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{category.icon}</span>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <span className={`ml-auto px-2 py-1 text-xs rounded-full text-white ${category.color}`}>
                {category.technologies.length}
              </span>
            </div>
            
            {/* Technologies grid */}
            <div className="grid grid-cols-2 gap-1">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs text-center border border-gray-700/50 hover:border-gray-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 