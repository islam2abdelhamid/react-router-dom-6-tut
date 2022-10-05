import { NavLink, Outlet } from 'react-router-dom';

const GuestRoot = () => (
  <>
    <h1>Welcome Guest User, PLZ login</h1>
    <ul>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'not-active')} to='/guest' end>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/guest/register'>Register</NavLink>
      </li>
    </ul>
    <div id='detail'>
      <Outlet />
    </div>
  </>
);

export default GuestRoot;
