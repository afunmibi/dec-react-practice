import React from 'react'
import jobs from '../jobs.json'
import Joblisting from './Joblisting'

const Joblistings = ({isHome= false}) => {
    const Joblistings = isHome ? jobs.slice(0,3): jobs
  return (
    <div>    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">

           {isHome ? 'Recent Jobs' : 'Browse Jobs'}
           
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {Joblistings.map(job=>(
            <Joblisting job={job} />
          ))}
                    
        </div>
      </div>
    </section>
</div>
  )
}

export default Joblistings