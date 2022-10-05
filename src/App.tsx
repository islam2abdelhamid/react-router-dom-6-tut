import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import GuestRoot from './routes/GuestRoot';
import Home from './routes/Home';
import Login from './routes/Login';
import Posts from './routes/Posts';
import Register from './routes/Register';
import UserRoot from './routes/UserRoot';
import axios from 'axios';
import Post from './routes/Post';
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: () =>
          axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data),
        action: async ({ request }) => {
          const formData = await request.formData();
          await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        },
      },
      {
        path: '/posts/:id',
        element: <Post />,
        loader: ({ params }) =>
          axios
            .get('https://jsonplaceholder.typicode.com/posts/' + params.id)
            .then((res) => res.data),
      },
    ],
  },
  {
    path: '/guest',
    element: <GuestRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <title>React App</title>
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
