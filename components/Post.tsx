import Image from "next/image";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import type { Post } from "@/data/posts";
import { formatNumber } from "@/lib/format-number";

type PostProps = {
  post: Post;
};

export function PostCard({ post }: PostProps) {
  return (
    <article className="space-y-4 rounded-2xl border border-insta-border bg-insta-card">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={post.avatar}
            alt={`${post.username} avatar`}
            width={40}
            height={40}
            className="rounded-full border border-insta-border"
          />
          <div>
            <p className="text-sm font-semibold">{post.username}</p>
            {post.location && (
              <p className="text-xs text-insta-muted">{post.location}</p>
            )}
          </div>
        </div>
        <button className="text-insta-muted transition hover:text-white">
          <MoreHorizontal size={22} />
        </button>
      </header>
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={post.image}
          alt="Post media"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 pb-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="transition hover:text-red-400">
              <Heart size={24} />
            </button>
            <button className="transition hover:text-white">
              <MessageCircle size={24} />
            </button>
            <button className="transition hover:text-white">
              <Send size={24} />
            </button>
          </div>
          <button className="transition hover:text-white">
            <Bookmark size={24} />
          </button>
        </div>
        <p className="text-sm font-semibold">
          {formatNumber(post.likes)} likes
        </p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">{post.username}</span>{" "}
          {post.caption}
        </p>
        <button className="mt-2 text-sm font-medium text-insta-muted hover:text-insta-text">
          View all {post.comments.length} comments
        </button>
        <div className="mt-2 space-y-1">
          {post.comments.slice(0, 2).map((comment) => (
            <p key={comment.id} className="text-sm">
              <span className="font-semibold">{comment.username}</span>{" "}
              {comment.comment}
            </p>
          ))}
        </div>
        <p className="mt-2 text-xs uppercase tracking-wide text-insta-muted">
          {post.timeAgo}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-insta-border pt-3">
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-insta-muted"
            placeholder="Add a comment..."
          />
          <button className="text-sm font-semibold text-blue-400 hover:text-blue-300">
            Post
          </button>
        </div>
      </div>
    </article>
  );
}
