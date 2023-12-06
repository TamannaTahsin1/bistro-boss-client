import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";



// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  const {_id, name, image, price, recipe } = item || {};
  const {user} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();
  const handleAddToCart = food =>{
    // console.log(food, user.email);
    if(user && user.email){
      // send cart item to the database   
       console.log(user.email, food)
       const cartItem = {
        menuId : _id,
        email: user.email,
        name,
        image,
        price
       }
       axiosSecure.post('/carts', cartItem)
       .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Successfully added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart to update the carts items count
          refetch();
        }
       })
    }
    else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login', {state: {from:location}})
        }
      });
    }
  }
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} />
      </figure>
      <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>
        ${price}
      </p>
      <div className='card-body text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-center'>
          <button onClick={() => handleAddToCart(item)} className='btn btn-outline border-0 border-b-4 bg-black text-yellow-700'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
