import React from 'react'

const Card = () => {
  return (
    <div
  class="relative flex max-w-[18rem] flex-col overflow-hidden rounded-l bg-white bg-clip-border text-gray-700 shadow-md rounded-br-[40px] rounded-tl-[20px]">
  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border ">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="ui/ux review check" />
  </div>
  <div class="p-6 bg-blue justify-start border border-r-2 ">
    <div className="flex ">
    <button className='btn '>Canify</button>
    <button className='btn'></button>
    </div>
    <div className='flex gap-10 mt-2'>
    <button className='btn bg-black p-'>THC 18%</button>
    <button className='btn'>CDB 1% </button>
    </div>
    <div className='flex mt-2'>
   
    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h4>
    <h4></h4>
    </div>
    <div class="flex items-center justify-between p- mt-7 ">
    <div class="flex items-center -space-x-3">
      
      <p className=''>ABC</p>
    </div>
    <p class="block font-sans text-white antialiased font-normal leading-relaxed text-inherit ">
    mango
    </p>
  </div>
  <div class="flex items-center justify-between p-  ">
    <div class="flex items-center -space-x-3">
      
      <p className=''>ABC</p>
    </div>
    <p class="block font-sans text-white antialiased font-normal leading-relaxed text-inherit ">
    mango
    </p>
  </div>
    <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
    
    </p>
    <div class="flex items-center justify-between p- mt-7 ">
    <div class="flex items-center -space-x-3">
      
      <h2 className='font-semibold text-2xl'>$99</h2>
    </div>
    <button class="block font-sans text-white antialiased font-normal leading-relaxed text-inherit bg-black rounded-br-[20px] rounded-tl-[20px]">
    in den Warenkorb
    </button>
  </div>
  </div>
  
</div> 
  )
}

export default Card
