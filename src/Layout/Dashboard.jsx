import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaSquareVirus } from "react-icons/fa6";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO:
  const [isAdmin] = useAdmin();
  console.log(isAdmin)
  return (
    <div className='flex'>
      {/* dashboard sidebar */}
      <div className='w-64 min-h-screen bg-orange-400 text-black'>
        <ul className='menu p-4'>
          {/* public  */}
          {
            isAdmin ? <>
                      <li>
            <NavLink to='/dashboard/adminHome'>
              <FaHome /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/addItems'>
              <FaUtensils/> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/manageItems'>
              <FaList /> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/bookings'>
              <FaBook />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/users'>
              <FaUsers /> All Users
            </NavLink>
          </li>
            </>

            :
            <>
            
            <li>
            <NavLink to='/dashboard/userHome'>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/cart'>
              <FaCartPlus /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'>
              <FaSquareVirus />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/bookings'>
              <FaList /> My Bookings
            </NavLink>
          </li>
            </>
          }
          {/* shared nav links */}
          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/contact'>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
