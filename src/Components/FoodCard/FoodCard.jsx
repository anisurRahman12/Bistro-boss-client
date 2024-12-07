

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
                <img
                    src={image} />
                   
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white ">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;