import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Greenberg Engineering",
  description: "Building the Brain for India's Infrastructure. Our history, values, and leadership.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-void min-h-screen pt-24">
      {children}
    </div>
  );
}
