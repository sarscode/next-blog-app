import { getPosts } from "@/services/posts";
import { Post } from "@/services/types";

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const post = (await getPosts(params.id)) as Post;

  return (
    <main className="flex min-h-screen flex-col container max-w-4xl">
      <div className="my-4">
        <h1 className="mb-2 font-bold text-xl">{post.title}</h1>
        <p className="mb-2">{post.body}</p>
        <p className="font-medium">
          Post - {post.id} &bull; User - {post.userId}
        </p>
      </div>
    </main>
  );
};

export default Page;
