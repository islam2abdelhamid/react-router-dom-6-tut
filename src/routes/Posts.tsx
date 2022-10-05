import { Helmet } from 'react-helmet';
import { Form, useLoaderData } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}
const Posts = () => {
  const posts: Post[] | any = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <Form action='/posts' method='post'>
        <input type='text' name='title' />
        <input type='text' name='body' />
        <button type='submit'>Submit</button>
      </Form>
      {posts?.length ? (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <h1>loading..</h1>
      )}
    </>
  );
};

export default Posts;
