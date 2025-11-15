import { TopNav } from "@/components/TopNav";
import { Stories } from "@/components/Stories";
import { Feed } from "@/components/Feed";
import { Sidebar } from "@/components/Sidebar";
import { SidebarNav } from "@/components/SidebarNav";
import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="mx-auto flex w-full max-w-6xl gap-8 px-4 pb-20 pt-6 sm:px-6 lg:pt-10">
        <SidebarNav />
        <main className="flex-1 space-y-6 lg:ml-4">
          <Stories />
          <Feed />
        </main>
        <Sidebar />
      </div>
      <BottomNav />
    </div>
  );
}
