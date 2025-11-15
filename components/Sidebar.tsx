import Image from "next/image";
import { stories } from "@/data/posts";

const suggestions = stories.slice(4, 9);

export function Sidebar() {
  return (
    <aside className="hidden w-80 shrink-0 lg:block">
      <div className="sticky top-24 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://i.pravatar.cc/150?img=12"
              alt="Your avatar"
              width={48}
              height={48}
              className="rounded-full border border-insta-border"
            />
            <div>
              <p className="text-sm font-semibold">your_story</p>
              <p className="text-xs text-insta-muted">Your personal account</p>
            </div>
          </div>
          <button className="text-sm font-semibold text-blue-400 hover:text-blue-300">
            Switch
          </button>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between text-sm">
            <p className="font-semibold text-insta-muted">
              Suggestions for you
            </p>
            <button className="text-xs font-semibold text-white hover:text-blue-400">
              See all
            </button>
          </div>
          <div className="space-y-4">
            {suggestions.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt={user.username}
                    width={40}
                    height={40}
                    className="rounded-full border border-insta-border"
                  />
                  <div>
                    <p className="text-sm font-semibold">{user.username}</p>
                    <p className="text-xs text-insta-muted">Follows you</p>
                  </div>
                </div>
                <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-insta-muted">
          © {new Date().getFullYear()} InstaClone · Built for demo purposes
        </p>
      </div>
    </aside>
  );
}
