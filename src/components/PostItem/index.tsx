import { Post } from "@/services/types";
import Link from "next/link";

const PostItem = ({ title, body, userId, id }: Post) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className="my-4">
        <h1 className="mb-2 font-bold">{title}</h1>
        <p className="mb-2">{body}</p>
        <p className="font-medium">
          Post - {id} &bull; User - {userId}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
