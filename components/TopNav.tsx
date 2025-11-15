import { Camera, Heart, MessageCircle, Search } from "lucide-react";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-insta-border bg-insta-dark/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Camera className="hidden text-white sm:block" size={24} />
          <p className="font-semibold text-2xl tracking-tight">InstaClone</p>
        </div>
        <div className="hidden max-w-sm flex-1 px-6 sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-insta-muted" size={18} />
            <input
              className="w-full rounded-lg bg-insta-border py-2 pl-10 pr-4 text-sm text-white outline-none transition focus:ring-2 focus:ring-white/10"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Heart className="text-white" size={22} />
          <MessageCircle className="text-white" size={22} />
          <Image
            src="https://i.pravatar.cc/150?img=12"
            alt="Your avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
