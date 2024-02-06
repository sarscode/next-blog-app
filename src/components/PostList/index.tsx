import { Post } from "@/services/types";
import React from "react";
import PostItem from "../PostItem";

interface Props {
  posts: Post[];
}
const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.length ? (
        posts.map((post: Post) => (
          <PostItem
            title={post.title}
            body={post.body}
            key={post.id}
            userId={post.userId}
            id={post.id}
          />
        ))
      ) : (
        <p>Unable to fetch posts</p>
      )}
    </div>
  );
};

export default PostList;
