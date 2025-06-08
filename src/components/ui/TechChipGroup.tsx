import TechChip from "./TechChip";

interface TechChipGroupProps {
  technologies: string[];
  borderColor?: string;
}

export default function TechChipGroup({ technologies, borderColor }: TechChipGroupProps) {
  return (
    <div className="flex flex-wrap justify-center gap-1 mt-2">
      {technologies.map((tech) => (
        <TechChip key={tech} tech={tech} borderColor={borderColor} />
      ))}
    </div>
  );
} 