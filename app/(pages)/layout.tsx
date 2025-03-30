import Navbar from "@/components/shared/navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      <div className="pt-18 h-full">{children}</div>
    </div>
  );
}
