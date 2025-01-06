import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import Joblistings from '../Components/Joblistings'
import ViewAlljobs from '../Components/ViewAllJobs'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Homecards/>
      <Joblistings/>
      <ViewAlljobs/>

    </div>
  )
}

export default Homepage