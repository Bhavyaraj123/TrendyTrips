import React, { useEffect, useState } from 'react'
import SearchBar from '../shared/SearchBar'

import Tour_card from '../shared/Tour_card'
import News from '../shared/News'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../utils/config'
const TourPage = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setpage] = useState(0)

  const {data:getAllTour,loader,error} = useFetch(`${BASE_URL}/tours?pages=${page}`)
  const allTours = getAllTour
  const {data:tourCounts}=useFetch(`${BASE_URL}/tours/search/count`)

  useEffect(() => {
      const pages = Math.ceil(tourCounts /8)
      setPageCount(pages)
      window.scrollTo(0,0)
  }, [page,tourCounts,getAllTour])
  
  return (
    <>
    <div className='px-20'>
    <div className='flex justify-center text-center'>
      <h2  className='text-5xl font-semibold mt-5'> <span className='text-orange-500'>A</span>ll <span className='text-orange-500'>T</span>ours</h2>
      
    </div>
{/* search bar section */}
    <section>
      <SearchBar/>  
    </section>
    
    {loader && <h2>Loading..</h2>}
      {error && <h2>{error}</h2>}
      {!loader && !error && allTours.length === 0 && (
        <p className="text-gray-600 text-center">No featured tours available.</p>
      )}
    {/* card section  */}
    <section className='flex flex-col justify-center items-center' >
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full justify-items-center mb-10  '>
      {
        allTours?.map(tour=>(
          <div key={tour._id} >
             <Tour_card tour={tour}/> 
          </div>
        ))
      }
        
      </div>
      
      <div className='flex page flex-row gap-4 mb-10'>
        {[...Array(pageCount).keys()].map(number=>(
          <span key={number} onClick={()=>setpage(number)} className={page===number?"activePage":""}>
            {number+1}

          </span>
        ))}
      </div >


    </section>


    </div>
      <div className="news flex w-full ">
<News/>
</div>
    </>
  )
}

export default TourPage