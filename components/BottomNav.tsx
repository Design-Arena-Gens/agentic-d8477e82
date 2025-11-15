import { Heart, Home, PlusSquare, Search, Video } from "lucide-react";
import Image from "next/image";

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-insta-border bg-insta-dark/95 py-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-xl items-center justify-around px-4">
        <button className="text-white">
          <Home size={24} />
        </button>
        <button className="text-white">
          <Search size={24} />
        </button>
        <button className="text-white">
          <PlusSquare size={24} />
        </button>
        <button className="text-white">
          <Video size={24} />
        </button>
        <button className="text-white">
          <Heart size={24} />
        </button>
        <Image
          src="https://i.pravatar.cc/150?img=12"
          alt="Your avatar"
          width={28}
          height={28}
          className="rounded-full border border-insta-border"
        />
      </div>
    </nav>
  );
}
