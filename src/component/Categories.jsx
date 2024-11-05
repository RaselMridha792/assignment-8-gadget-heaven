import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed flex flex-col">
        <NavLink role='tab' className='tab' to='./'> All product</NavLink>
        {
            categories.map(category=> <NavLink role='tab' className='tab' key={category.category} to={`category/${category.category}`}>{category.category}</NavLink>)
        }
      </div>
    </>
  );
};

Categories.propTypes = {
    categories: PropTypes.array,
}

export default Categories;
