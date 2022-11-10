import React from 'react'
import { Navbar, Hero, CTA, CardDeal, Clients, Footer, Testiomonials, Business, Billing } from './components'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div classname={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div classname={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials/>
          <Clients />
          <Cta/>
          <Dooter/>
        </div>
      </div>


    </div>
  )

export default App
