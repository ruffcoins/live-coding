"use client";

import { useEffect, useState } from "react";
import { fetchPostsApi } from "@/services/post.service";
import { IPost } from "@/interfaces/posts.interface";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const data = await fetchPostsApi()
      console.log("data", data)
      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, setPosts }
}
export default useFetchPosts