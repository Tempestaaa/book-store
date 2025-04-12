import SidebarMenu from "@/app/(pages)/settings/_components/sidebar-menu";
import { Button } from "@/components/ui/button";

export default function SettingsSidebar() {
  return (
    <aside className="w-72 px-4 flex flex-col">
      <h5>Settings</h5>
      <SidebarMenu />

      <Button
        variant="destructive"
        className="mt-auto mb-4 font-heading rounded-full"
      >
        Sign out
      </Button>
    </aside>
  );
}
