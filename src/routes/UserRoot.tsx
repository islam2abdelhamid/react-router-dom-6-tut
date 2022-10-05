import { Link, Outlet } from 'react-router-dom';

const UserRoot = () => (
  <>
    <h1>Welcome Logged User</h1>
    <div id='sidebar'>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`posts`}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div id='detail'>
      <Outlet />
    </div>
  </>
);

export default UserRoot;
