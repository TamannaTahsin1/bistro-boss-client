import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";


// eslint-disable-next-line react/prop-types
const CartTable = ({ item, index }) => {
    const [,refetch] = useCart()
  const {_id,name,image,price} = item || {};
  const axiosSecure = useAxios()
//   delete operation
  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        }
      });
  }
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
        {index}
        </th>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img
                  src={image}
                  alt='Avatar Tailwind CSS Component'
                />
              </div>
            </div>
          </div>
        </td>
        <td>
            {name}
        </td>
        <td>${price}</td>
        <th>
          <button onClick={() =>handleDelete(_id)} className='btn btn-ghost btn-lg text-red-500'><FaTrashAlt></FaTrashAlt></button>
        </th>
      </tr>
    </>
  );
};

export default CartTable;
