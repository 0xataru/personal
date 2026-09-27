import { ArrowUpRight, Download, Mail, Star } from "lucide-react";
import Portrait from "@/components/Portrait";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/BrandIcons";
import { experience, links, profile, skills } from "@/data/cv";
import { featuredProjects } from "@/data/projects";

const nav = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

const langColor: Record<string, string> = { Rust: "#dea584", Go: "#00add8" };

const socialIcon: Record<string, React.ReactNode> = {
  Email: <Mail className="size-4" strokeWidth={1.75} />,
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  X: <XIcon />,
};

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-line py-16 sm:py-24"
    >
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">{index}</span> / {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  const siteSkills = skills.filter((g) => g.onSite);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/85 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-mono text-sm tracking-tight">
            mark<span className="text-accent">.</span>raiter
          </a>
          <nav className="flex items-center gap-4 font-mono text-xs sm:gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hidden text-muted transition-colors hover:text-paper sm:inline"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1.5 transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-3.5" strokeWidth={1.75} />
              cv.pdf
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* hero */}
        <section className="flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center py-12 text-center">
          <Portrait className="w-[260px] sm:w-[320px] lg:w-[360px]" />
          <h1 className="mt-10 font-serif text-6xl leading-none tracking-tight sm:text-8xl">
            Mark <em className="text-accent">Raiter</em>
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm">
            {profile.title} / {profile.tagline}
          </p>
          <p className="mt-10 max-w-xl text-lg leading-relaxed sm:text-xl">
            It&apos;s the website of a backend engineer,{" "}
            <span className="bg-paper px-1.5 text-ink">performance nerd</span>{" "}
            and anime watcher.
          </p>
          <p className="mt-6 font-mono text-[11px] text-faint">
            (click the portrait)
          </p>
        </section>

        <Section id="about" index="01" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-paper/90">
            <p className="text-2xl leading-snug text-paper sm:text-3xl">
              Hi, I&apos;m Mark. I build backends in{" "}
              <span className="text-accent">Go</span> and{" "}
              <span className="text-accent">Rust</span>, and I get unreasonably
              happy when a p99 goes down.
            </p>
            <p>
              These days I&apos;m at Sombra, looking after around fifteen
              catalog services inside a 200+ microservice platform. It runs a
              real-estate portal with 5.5M people a month browsing 600K
              listings. Before that I led a team of six at Zero Task Labs,
              building a multi-tenant CRM for commerce businesses.
            </p>
            <p>
              After hours I make small tools, like{" "}
              <a
                className="text-link"
                href="https://github.com/0xataru/dfox"
                target="_blank"
                rel="noopener noreferrer"
              >
                dfox
              </a>
              , a terminal client for Postgres and MySQL, and{" "}
              <a
                className="text-link"
                href="https://github.com/0xataru/workerpool"
                target="_blank"
                rel="noopener noreferrer"
              >
                workerpool
              </a>
              , a tiny Go library for fanning work out across goroutines. The
              rest is on{" "}
              <a
                className="text-link"
                href="https://github.com/0xataru"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . The remaining hours go to anime and manga, which explains the
              drawing up top.
            </p>
            <p>
              If you want to talk systems, a project, or this season&apos;s
              shows,{" "}
              <a className="text-link" href="#contact">
                say hello
              </a>
              .
            </p>
          </div>
        </Section>

        <Section id="work" index="02" title="Work">
          <ol className="space-y-12">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.start}`}
                className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1.5">
                  {job.start} &ndash; {job.end}
                </p>
                <div>
                  <h3 className="text-xl font-medium">
                    {job.role} <span className="text-muted">at</span>{" "}
                    {job.company}
                  </h3>
                  {job.project && (
                    <p className="mt-1 text-sm text-muted">{job.project}</p>
                  )}
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-paper/85">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-faint">
                    {job.stack.join(" / ")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index="03" title="Projects">
          <ul className="border-t border-line">
            {featuredProjects.map((p) => (
              <li key={p.title} className="border-b border-line">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 sm:grid-cols-[200px_1fr_auto]"
                >
                  <span className="font-mono text-base transition-colors group-hover:text-accent">
                    {p.title}
                  </span>
                  <span className="order-3 col-span-2 text-sm text-muted sm:order-none sm:col-span-1">
                    {p.description}
                  </span>
                  <span className="flex items-center gap-3 font-mono text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="size-2"
                        style={{ background: langColor[p.language] }}
                      />
                      {p.language}
                    </span>
                    {p.stars ? (
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3" strokeWidth={1.75} />
                        {p.stars}
                      </span>
                    ) : null}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stack" index="04" title="Stack">
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {siteSkills.map((g) => (
              <div key={g.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {g.label}
                </dt>
                <dd className="mt-2 leading-relaxed">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" index="05" title="Contact">
          <p className="font-serif text-3xl leading-tight sm:text-4xl">
            Say <em className="text-accent">hello</em>
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-sm text-muted transition-colors hover:border-paper hover:text-paper"
                >
                  {socialIcon[l.label]}
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 border border-accent px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-ink"
              >
                <Download className="size-4" strokeWidth={1.75} />
                Download CV
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 font-mono text-xs text-faint sm:flex-row sm:justify-between sm:px-6">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
