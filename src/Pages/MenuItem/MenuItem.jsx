

// eslint-disable-next-line react/prop-types
const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item || {}
    return (
        <div className="flex space-x-4 mb-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt=""  className="w-[80px]"/>
            <div>
            <h3 className="uppercase">{name}</h3>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;