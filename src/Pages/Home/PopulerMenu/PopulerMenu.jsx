
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopulerMenu = () => {
    const [menu]=useMenu();
    const populer = menu.filter(item =>item.category === 'popular');
    // const [menu, setMenu]=useState([]);
    
    // useEffect( ()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const populerItems= data.filter(item => item.category=== 'popular');
    //         setMenu(populerItems);
    //     });
    // }, [])
    return (
        <section className="mb-10">
            <SectionTitles
            heading="From our Menu"
            subHeading="Populer Items"
            >
                
            </SectionTitles>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    populer.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;