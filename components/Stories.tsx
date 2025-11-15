import Image from "next/image";
import { stories } from "@/data/posts";
import { Circle } from "lucide-react";

export function Stories() {
  return (
    <div className="border border-insta-border bg-insta-card px-3 py-4 sm:px-4 sm:py-5">
      <div className="flex items-center justify-between pb-3">
        <p className="text-sm font-semibold text-insta-muted">Stories</p>
        <button className="text-xs font-medium text-blue-400 hover:text-blue-300">
          Watch all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex w-20 flex-col items-center gap-2">
            <div className="relative">
              <div
                className={`rounded-full p-[2px] ${
                  story.isLive ? "bg-gradient-to-tr from-fuchsia-500 via-red-500 to-yellow-500" : "bg-insta-border"
                }`}
              >
                <Image
                  src={story.avatar}
                  alt={story.username}
                  width={60}
                  height={60}
                  className="rounded-full border border-insta-card"
                />
              </div>
              {story.isLive && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <Circle className="h-14 w-14 animate-pulse text-white/40" />
                </span>
              )}
            </div>
            <p className="truncate text-xs text-insta-muted">@{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
