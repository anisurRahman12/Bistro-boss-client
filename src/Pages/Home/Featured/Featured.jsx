import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import featuredImg from '../../../assets/home/featured.jpg';
import "./Featured.css";
const Featured = () => {
    return (
        <div className="featured-items bg-fixed">
            <SectionTitles
            subHeading="Check out" heading={'Featured Item'}
            ></SectionTitles>
            <div className="md:flex  items-center justify-center  pb-20 px-36 pt-12 bg-slate-400 bg-opacity-40">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10 text-white">
                <p>Aug 20, 2029</p>
                <p className="upercase">Where can I get some</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus sed deleniti ipsa atque! Similique, omnis fugiat saepe distinctio et mollitia porro laborum, sunt modi officia fugit, possimus minus iste voluptas.</p>
                <button className="btn btn-outline border-0  border-b-4">Oder Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;