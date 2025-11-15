import { posts } from "@/data/posts";
import { PostCard } from "@/components/Post";

export function Feed() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
