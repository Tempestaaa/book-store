import SettingsSidebar from "@/app/(pages)/settings/_components/settings-sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 h-full">
      <SettingsSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
