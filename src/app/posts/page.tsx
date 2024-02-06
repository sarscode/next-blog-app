import PostForm from "@/components/PostForm";

const Page = () => {
  return (
    <main className="container mt-12 max-w-xl">
      <h1 className="text-lg mb-4 font-bold">Create a new post</h1>
      <PostForm />
    </main>
  );
};

export default Page;
