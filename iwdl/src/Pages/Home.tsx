import { NavLink } from "react-router-dom";
export function Home() {
  return (
    <main>
      <h1>How can we make the digital world inclusive?</h1>
      <p>At Intersectional Web Design Lab, we research ways to create ICT design that is intersectionally inclusive to everyone. We share ...</p>
      <NavLink to="/what-is-intersectional-design">Read more about "What is Intersectional Design?"</NavLink>
      <h2>What we do</h2>
    </main>
  )
}
