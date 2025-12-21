import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <NavLink className="logo" to="/">Intersectional Web Design Lab</NavLink>

      <nav className="header-nav">
        <ul>
        <li><NavLink to="/what-is-intersectional-web-design">
          What is Intersectional Web Design?
        </NavLink></li>
        <li><NavLink to="/design-in-practice">Design in Practice</NavLink></li>
        <li><NavLink to="/resources-and-events">Resources and Events</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
