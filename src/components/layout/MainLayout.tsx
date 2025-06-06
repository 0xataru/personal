import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {children}
    </main>
  );
} 