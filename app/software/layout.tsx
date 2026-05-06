import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSR Institute — Software Training",
  description: "Professional Software Training — Full-stack, Python, AI/ML, Cloud and modern tech stacks.",
};

export default function SoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
