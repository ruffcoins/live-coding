import dynamic from "next/dynamic";
import { useState } from "react";

const PostList = dynamic(() => import("../components/posts/PostsList"), {
  ssr: false,
  loading: () => <div>Loading Posts...</div>
});

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <PostList />
    </div>
  );
}
