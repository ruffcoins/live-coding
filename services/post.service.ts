import { IPost } from "@/interfaces/posts.interface";
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPostsApi = async(): Promise<IPost[]> => {
  const response = await axios.get(`${API_URL}/posts`);

  // console.log("posts", response.data);
  return response.data;
}