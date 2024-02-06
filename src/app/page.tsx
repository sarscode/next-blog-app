import PostList from "@/components/PostList";
import { getPosts } from "@/services/posts";
import { Post } from "@/services/types";

export default async function Home() {
  const posts = (await getPosts()) as Post[];

  return (
    <main className="flex min-h-screen flex-col container max-w-4xl">
      <div className="pt-6 pb-12">
        <h1 className="text-2xl font-bold tracking-tight lg:text-4xl mt-12">
          Next 14 Blog App
        </h1>
        <p className="mt-4">
          Blog posts are fetched from Typicode JSON Placeholder.
        </p>
      </div>
      <PostList posts={posts} />
    </main>
  );
}
