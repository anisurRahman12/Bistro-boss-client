import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopulerMenu = () => {
    const [menu, setMenu]=useState([]);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populerItems= data.filter(item => item.category=== 'popular');
            setMenu(populerItems);
        });
    }, [])
    return (
        <section className="mb-10">
            <SectionTitles
            heading="From our Menu"
            subHeading="Populer Items"
            >
                
            </SectionTitles>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;