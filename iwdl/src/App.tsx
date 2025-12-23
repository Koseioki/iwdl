import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Header } from './Components/Global/Header';
import { WhatIsIntersectionalWebDesign } from './Pages/WhatIsIntersectionalWebDesign';
import { DesignInPractice } from './Pages/DesignInPractice';
import { ResourcesAndEvents } from './Pages/ResourcesAndEvents';
import { Footer } from './Components/Global/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-is-intersectional-web-design" element={<WhatIsIntersectionalWebDesign />} />
        <Route path="/design-in-practice" element={<DesignInPractice />} />
        <Route path="/resources-and-events" element={<ResourcesAndEvents />} />
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
