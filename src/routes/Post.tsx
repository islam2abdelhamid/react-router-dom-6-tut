import { useLoaderData } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}
const Post = () => {
  const post: Post | any = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
