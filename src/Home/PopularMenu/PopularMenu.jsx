
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Pages/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu?.filter(item => item.category === 'popular')

    return (
        <div>
            <section>
                <SectionTitle
                subHeading={'Popular Items'}
                heading={'From Our Menu'}></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular?.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
           <div className="flex justify-center items-center">
           <button className="btn btn-outline border-0 border-b-4 text-white">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;