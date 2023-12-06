import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import '../Featured/Featured.css'
const Featured = () => {
    return (
        <div className="featured-items text-white mt-10">
            <section className="bg-black bg-opacity-30">
                <SectionTitle subHeading={'check it out'} heading={'Featured Items'}>
                </SectionTitle>
            </section>
                <div className="md:flex justify-center items-center py-20 px-36 bg-black bg-opacity-30">
                <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores velit unde veniam laudantium nobis numquam, expedita quod itaque consequuntur.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
            </div>
                </div>
        </div>
    );
};

export default Featured;