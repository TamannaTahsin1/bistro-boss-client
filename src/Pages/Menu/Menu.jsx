import { Helmet } from "react-helmet";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Bistro Boss | Menu</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subheading={"Dont miss"}
        heading={"Todays Offer"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        img={dessertImg}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      <h2></h2>
    </div>
  );
};

export default Menu;
