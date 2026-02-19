import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Pillars from './components/Pillars'
import Transformation from './components/Transformation'
import TargetAudience from './components/TargetAudience'
import Creators from './components/Creators'
import Pricing from './components/Pricing'
import Urgency from './components/Urgency'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingPopup from './components/BookingPopup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="app-container">
      <Navbar onOpenBooking={handleOpenPopup} />
      <main>
        <Hero onOpenBooking={handleOpenPopup} />
        <Problem onOpenBooking={handleOpenPopup} />
        <Solution onOpenBooking={handleOpenPopup} />
        <Pillars onOpenBooking={handleOpenPopup} />
        <Transformation onOpenBooking={handleOpenPopup} />
        <TargetAudience onOpenBooking={handleOpenPopup} />
        <Creators onOpenBooking={handleOpenPopup} />
        <Pricing onOpenBooking={handleOpenPopup} />
        <Urgency onOpenBooking={handleOpenPopup} />
        <FAQ onOpenBooking={handleOpenPopup} />
        <Guarantee onOpenBooking={handleOpenPopup} />
        <FinalCTA onOpenBooking={handleOpenPopup} />
        <Footer />
      </main>
      <BookingPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  )
}

export default App
