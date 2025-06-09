interface TechChipProps {
  tech: string;
  borderColor?: string;
}

export default function TechChip({ tech, borderColor = "border-blue-500" }: TechChipProps) {
  return (
    <span className={`inline-block px-3 sm:px-4 lg:px-7 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold text-gray-300 bg-transparent border ${borderColor} hover:bg-gray-800/20 transition-colors cursor-default m-0.5 sm:m-1`}>
      {tech}
    </span>
  );
} 