import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const HeaderNavMenu = () => {
  const { pathname } = useLocation();

  const isActiveClassName = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        <li
          className={cn("menu-item-has-children", {
            active: ["/"].includes(pathname),
          })}
        >
          <a href="/">Home</a>
         
        </li>
        <li className={cn(isActiveClassName("/about"))}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={cn(isActiveClassName("/services"))}>
          <Link to="/services">Our Services</Link>
        </li>
        <li className={cn(isActiveClassName("/testimonial"))}>
          <Link to="/testimonial">Testimonials</Link>
        </li>
        <li className={cn(isActiveClassName("/contact"))}>
          <Link to="/contact">contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavMenu;
