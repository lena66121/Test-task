import axios from 'axios';
import { NewPost, Comment, Post } from '../typescript/interfaces'

axios.defaults.baseURL = process.env.BASE_API_URL;

export const getLatestPosts = async (): Promise<Array<Post>> => {
  try {
    const res = await axios.get('/posts');
    const posts = await res.data;
    return posts;
    } catch (err) {
      throw err;
    }
  
}

export const getPostInfo = async (id: number): Promise<Post> => {
  try {
    const res = await axios.get(`/posts/${id}?_embed=comments`);
    const post = await res.data;
    return post;
    } catch (err) {
      throw err;
    }
  
}

export const createNewPost = async (credentials: NewPost): Promise<object> => {
  try {
    const post = await axios.post(`/posts`, credentials);
    return post;
    } catch (err) {
      throw err;
    }
}

export const deletePost = async (id: number): Promise<void> => {
  try {
  await axios.delete(`/posts/${id}`);
  } catch (err) {
    throw err;
  }
}

export const createComment = async (credentials: Comment): Promise<void> => {
  try {
  await axios.post(`/comments`, credentials);
  } catch (err) {
    throw err;
  }
}

