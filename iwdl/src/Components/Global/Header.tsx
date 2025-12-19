import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
                <NavLink to="/">Intersectional Web Design Lab</NavLink>

      <nav>
        <NavLink to="/what-is-intersectional-web-design">
          What is Intersectional Web Design?
        </NavLink>
        <NavLink to="/design-in-practice">Design in Practice</NavLink>
        <NavLink to="/resources-and-events">Resources and Events</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </nav>
    </header>
  );
}
