"use client";

import useFetchPosts from "@/hooks/useFetchPosts";
import { IPost } from "@/interfaces/posts.interface";
import { useCallback, useEffect, useState } from "react";

const PostsList = () => {
  const { posts } = useFetchPosts();


  const [initialPosts, setinitialPosts] = useState<IPost[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPostsCount, setCurrentPostCount] = useState(0)

  const increment = 40;

  useEffect(() => {
    setinitialPosts(posts.slice(0, 40))
    setCurrentPostCount(currentPostsCount + increment);
  }, [currentPostsCount])

  useEffect(() => {

  }, []);

  const loadMore = () => {
    setLoadingMore(true);


    // get more posts
  }

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100) {
      // load more posts
      loadMore()
    }
  }, [loadMore])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", handleScroll)
  }, [handleScroll]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("window height", window.innerHeight)
  //     console.log("scrollTop", document.documentElement.scrollTop)
  //     console.log("offsetHeight", document.documentElement.offsetHeight)
  //     console.log("height", window.innerHeight + document.documentElement.scrollTop)

  //   }, 100)

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="">
        <h1>PostsList</h1>
      </div>

      <div className="space-y-2 divide-y p-2">
        {initialPosts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>

    </div>

  )
}
export default PostsList