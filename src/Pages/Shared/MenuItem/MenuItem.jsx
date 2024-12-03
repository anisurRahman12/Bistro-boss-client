

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-3 py-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <p>Name:{name}------</p> 
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
           
        </div>
    );
};

export default MenuItem;