import React from 'react'

const CardComponent = ({data}) => {
  console.log(data)
  return (

     <div class="sm:w-1/3 md:w-1/5 lg:w-1/4">
     <div class="bg-white-100 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div className=' flex align-middle justify-center'>
     <img className='h-40 w-40 object-cover rounded-full' src={data[0]} alt="" />
      </div>
  <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight text-center">{data[1]}</h3>
  <p class="text-slate-500  mt-2 text-sm text-center">
    {data[2]}
  </p>
</div>
     </div>

    
  )
}

export default CardComponent
