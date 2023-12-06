/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Components/Cover/Cover";
import MenuItem from "../../MenuItem/MenuItem";

const MenuCategory = ({items, title, img }) => {
    return (
        <div>
                {title &&  <Cover img={img} title={title}></Cover>}   
        <div className="grid md:grid-cols-2 gap-10 mt-20 mb-20">
        {
            items?.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
        }
    </div>
   <div>
    <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
    </Link>
   </div>
        </div>
    );
};

export default MenuCategory;