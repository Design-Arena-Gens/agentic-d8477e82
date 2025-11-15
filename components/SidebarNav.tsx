import { Compass, Home, Menu, MessageCircle, PlusSquare, Search, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const mainLinks = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Explore", icon: Compass },
  { label: "Reels", icon: Video },
  { label: "Messages", icon: MessageCircle },
  { label: "Create", icon: PlusSquare }
];

export function SidebarNav() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r border-insta-border bg-insta-dark/80 px-6 py-8 lg:block">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-8">
          <p className="text-2xl font-semibold tracking-tight">InstaClone</p>
          <nav className="space-y-2">
            {mainLinks.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href="#"
                className={clsx(
                  "flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-insta-muted transition hover:bg-white/5 hover:text-white",
                  label === "Home" && "text-white"
                )}
              >
                <Icon size={22} />
                <span>{label}</span>
              </Link>
            ))}
            <Link
              href="#"
              className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-insta-muted transition hover:bg-white/5 hover:text-white"
            >
              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                width={22}
                height={22}
                className="rounded-full border border-insta-border"
              />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
        <button className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-insta-muted transition hover:bg-white/5 hover:text-white">
          <Menu size={22} />
          <span>More</span>
        </button>
      </div>
    </aside>
  );
}
