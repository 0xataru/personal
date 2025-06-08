import { techStackData } from "@/data/techStack";
import { TechChipGroup } from "@/components";

export default function TechStackSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-800 pb-4">
        Tech Stack
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.values(techStackData).map((category) => (
          <div key={category.name} className="bg-gray-900/50 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
            
            <TechChipGroup technologies={category.technologies} borderColor={category.borderColor} />
          </div>
        ))}
      </div>
    </section>
  );
} 