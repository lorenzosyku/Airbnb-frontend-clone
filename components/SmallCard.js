import Image from "next/image"

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className="relative h-16 w-16">
        <Image
          className='rounded-xl'
          src={img}
          layout='fill'
        />
      </div>
      <div className="">
        <h2>{location}</h2>
        <h2 className='text-gray-500'>{distance}</h2>
      </div>
      
      
    </div>
  )
}

export default SmallCard
