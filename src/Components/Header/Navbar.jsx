import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li className='font-bold mr-2'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-500"
              : ""
          }>
          Home
        </NavLink>
      </li>
      <li className='font-bold mr-2'>
        <NavLink
          to='/menu'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-500"
              : ""
          }>
          Our Menu
        </NavLink>
      </li>
      <li className='font-bold mr-2'>
        <NavLink
          to='/order/salad'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-500"
              : ""
          }>
          Order Food
        </NavLink>
      </li>
      <li className='font-bold mr-2'>
        <NavLink
          to='/secret'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-500"
              : ""
          }>
          Secret
        </NavLink>
      </li>
      <li className='font-bold mr-2'>
        <NavLink
          to='/dashboard/cart'> 
          <button className='btn btn-sm'>
          <FaCartPlus />
            <div className='badge badge-secondary'>+{cart.length}</div>
          </button>
        </NavLink>
      </li>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className='btn btn-sm'>
            Logout
          </button>
        </>
      ) : (
        <>
          <li className='font-bold mr-2'>
            <NavLink
              to='/login'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-bold bg-red-500"
                  : ""
              }>
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className='max-w-screen-xl mx-auto navbar fixed z-10 bg-opacity-30 bg-black text-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {navLinks}
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>BistroBoss</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
