import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSR Institute — Electrical Training",
  description: "Professional Electrical Training — Industrial wiring, panel boards, HT/LT motors and protocols.",
};

export default function ElectricalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
