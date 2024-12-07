import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../Hooks/useMenu";
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import MenuCategory from "../MenuCategory/MenuCategory";

// img

import DesertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import drinksImg from '../../../assets/menu/banner3.jpg';
import offeredImg from '../../../assets/menu/menu-bg.png';





const Menu = () => {
   const [menu]= useMenu();
   const desserts = menu.filter(item =>item.category === 'dessert');
   const soup = menu.filter(item =>item.category === 'soup');
   const salad = menu.filter(item =>item.category === 'salad');
   const pizza = menu.filter(item =>item.category === 'pizza');
   const drinks = menu.filter(item =>item.category === 'drinks');
   const offered = menu.filter(item =>item.category === 'offered');
   
    return (
        <div>
            <Helmet>
                <title>Bistro boss | menu</title>
            </Helmet>
            <Cover img={MenuImg} title={'our menu'}></Cover>
          <SectionTitles subHeading="Don't miss" heading="Today's Offer"></SectionTitles>
          <MenuCategory items={offered}></MenuCategory>
          {/*1 desert-img */}
          <MenuCategory items={desserts} title="Dessert"
          img={DesertImg}
          ></MenuCategory>
          {/*2 desert-img */}
          <MenuCategory items={soup} title="soup"
          img={soupImg}
          ></MenuCategory>
          {/*3 desert-img */}
          <MenuCategory items={salad} title="salad"
          img={saladImg}
          ></MenuCategory>
          {/*4 desert-img */}
          <MenuCategory items={pizza} title="pizza"
          img={pizzaImg}
          ></MenuCategory>
          {/*5 desert-img */}
          <MenuCategory items={drinks} title="drinks"
          img={drinksImg}
          ></MenuCategory>
          
           
           
        </div>
    );
};

export default Menu;