import React from 'react'

const Banner = () => {
  return (
   <div className="w-full py-3 text-sm font-medium text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
  <p className="flex items-center justify-center gap-3">
    <span className="bg-green-600 text-white text-xl px-4 py-1 rounded-md leading-5 font-semibold">
      New
    </span>
    <span className="text-[24px]"> AI Feature Added</span>
  </p>
</div>
  )
}

export default Banner