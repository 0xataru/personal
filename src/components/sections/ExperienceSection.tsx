import { featuredProjects } from "@/data/experience";

export default function ProjectsSection() {
  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white border-b border-gray-800 pb-3 sm:pb-4">
        Featured Projects
      </h2>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 backdrop-blur rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className={`w-3 h-3 ${project.color} rounded-full flex-shrink-0`}></div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 flex-shrink-0 ml-2">
                <span className="font-medium">{project.language}</span>
                {project.stars && (
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
              {project.description}
            </p>
          </a>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 text-center">
        <a
          href="https://github.com/0xataru"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 text-sm sm:text-base"
        >
          <span>View all projects on GitHub</span>
          <span className="text-xs">→</span>
        </a>
      </div>
    </section>
  );
} 