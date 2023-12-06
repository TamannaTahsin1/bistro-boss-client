/** @format */

import useCart from "../../Hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className='m-10'>
      <div className='flex justify-evenly mb-8'>
        <h2 className=' text-2xl'>Total Items: {cart.length}</h2>
        <h2 className=' text-2xl'>Total Price: {totalPrice}</h2>
        <button className='btn btn-primary'>Pay</button>
      </div>

      {/* table */}
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>
                    #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart?.map((item, index) => <CartTable key={item._id} item={item} index={index}></CartTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
