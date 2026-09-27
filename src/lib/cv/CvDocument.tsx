import path from "node:path";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { education, experience, links, profile, skills, summary } from "@/data/cv";

const fontDir = path.join(process.cwd(), "src/lib/cv/fonts");
Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(fontDir, "Inter-400.ttf"), fontWeight: 400 },
    { src: path.join(fontDir, "Inter-500.ttf"), fontWeight: 500 },
    { src: path.join(fontDir, "Inter-600.ttf"), fontWeight: 600 },
    { src: path.join(fontDir, "Inter-700.ttf"), fontWeight: 700 },
  ],
});
// keep long words intact instead of hyphenating them
Font.registerHyphenationCallback((word) => [word]);

const INK = "#1f1f1f";
const RULE = "#9a7fd1";

const s = StyleSheet.create({
  page: {
    paddingTop: 22,
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontFamily: "Inter",
    fontSize: 9,
    lineHeight: 1.38,
    color: INK,
  },
  name: { fontSize: 28, fontWeight: 700, textAlign: "center", lineHeight: 1.15 },
  contactLine: { fontSize: 10.5, textAlign: "center", lineHeight: 1.5 },
  link: { color: INK, textDecoration: "underline" },
  rule: { borderBottomWidth: 0.9, borderBottomColor: RULE, marginTop: 7, marginBottom: 8 },
  heading: { fontSize: 11.5, fontWeight: 700, marginBottom: 3 },
  jobHead: { flexDirection: "row", justifyContent: "space-between", marginTop: 4, marginBottom: 1 },
  role: { fontSize: 10, fontWeight: 600 },
  period: { fontSize: 10, fontWeight: 600 },
  justify: { textAlign: "justify" },
  bold: { fontWeight: 700 },
  eduTitle: { fontSize: 11.5, fontWeight: 500 },
  eduBullet: { flexDirection: "row", paddingLeft: 7 },
  eduDot: { width: 11 },
  eduText: { flex: 1 },
});

function Rule() {
  return <View style={s.rule} />;
}

export function CvDocument() {
  const cvLinks = links.filter((l) => l.inCv);

  return (
    <Document title={`${profile.name} - CV`} author={profile.name} subject={profile.title}>
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{profile.name.toUpperCase()}</Text>
        <Text style={s.contactLine}>{profile.phone}</Text>
        <Text style={s.contactLine}>
          <Link src={`mailto:${profile.email}`} style={s.link}>
            {profile.email}
          </Link>
        </Text>
        <Text style={s.contactLine}>
          {cvLinks.map((l, i) => (
            <Text key={l.href}>
              {i > 0 && " • "}
              <Link src={l.href} style={s.link}>
                {l.display ?? l.label}
              </Link>
            </Text>
          ))}
        </Text>

        <Rule />
        <Text style={s.heading}>SUMMARY</Text>
        {summary.map((p) => (
          <Text key={p}>{p}</Text>
        ))}

        <Rule />
        <Text style={s.heading}>EXPERIENCE</Text>
        {experience.map((job) => (
          <View key={`${job.company}-${job.start}`}>
            <View style={s.jobHead} wrap={false}>
              <Text style={s.role}>
                {job.role}, {job.company}
              </Text>
              <Text style={s.period}>
                {job.start} - {job.end}
              </Text>
            </View>
            {job.project && <Text>Project: {job.project}</Text>}
            {job.stack.length > 0 && <Text>Tech Stack: {job.stack.join(", ")}</Text>}
            {job.highlights.map((h) => (
              <Text key={h} style={s.justify}>
                • {h}
              </Text>
            ))}
          </View>
        ))}

        <View wrap={false}>
          <Rule />
          <Text style={s.heading}>SKILLS</Text>
          {skills.map((group) => (
            <Text key={group.label}>
              <Text style={s.bold}>{group.label}</Text>: {group.items.join(", ")}
            </Text>
          ))}
        </View>

        <View wrap={false}>
          <Rule />
          {education.map((e) => (
            <View key={e.title}>
              <View style={s.jobHead}>
                <Text style={s.eduTitle}>{e.title}</Text>
                <Text style={s.period}>
                  {e.start} - {e.end}
                </Text>
              </View>
              <Text>{e.school}</Text>
              {e.notes.map((n) => (
                <View key={n} style={s.eduBullet}>
                  <Text style={s.eduDot}>•</Text>
                  <Text style={s.eduText}>{n}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
