import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_name, product_Id, image, price, category, details } = product;
  return (
    <>
      <div className="card bg-base-100 shadow-lg p-5 border">
        <figure>
          <img className="w-full h-64 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p>price: ${price}</p>
          <div className="card-actions justify-start py-2">
            <Link to={`/product-details/${product_Id}`}>
              <button className="btn btn-outline text-purple-500 hover:bg-purple-500">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};
export default Card;
