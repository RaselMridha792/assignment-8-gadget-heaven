import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {


  return (
    <>
      <div role="tablist" className="tabs tabs-boxed flex flex-col bg-white">
        <NavLink
          className={({isActive})=>`${isActive?'bg-purple-600 text-white':''} text-xl w-full py-3 px-5 rounded-3xl hover:bg-purple-600 hover:text-white`}
          to="./"
        >
          All product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className={({isActive})=>`text-xl w-full ${isActive?'bg-purple-600 text-white':''} py-3 px-5 rounded-3xl hover:bg-purple-600 hover:text-white`}
            key={category.category}
            to={`category/${category.category}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
