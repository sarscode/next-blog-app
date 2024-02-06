import axiosClient from "./client";
import { Options, Post } from "./types";

export const getPosts = async (id?: string, options?: Options) => {
  try {
    if (id) {
      const post = await axiosClient.get<Post>(`/posts/${id}`);
      options?.onSuccess?.(post);
      return post;
    }

    const posts = await axiosClient.get<Post[]>("/posts");
    options?.onSuccess?.(posts);

    return posts;
  } catch (error) {
    options?.onError?.(error);
    return error;
  }
};

export const createPost = async (body: any, options?: Options) => {
  try {
    const posts = await axiosClient.get<Post[]>("/posts", body);
    options?.onSuccess?.(posts);

    return posts;
  } catch (error) {
    options?.onError?.(error);
    return error;
  }
};
