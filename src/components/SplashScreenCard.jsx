import React from 'react'

export default function SplashScreenCard({data}) {
  console.log(data)



  return (
  
  
  <div className='w-78 h-108 m-8'>
   <h3 className="text-lg text-gray-800 dark:text-white">
  <span className={data?.name ? "font-bold bg-gradient-to-r from-customPink to-customBlue text-transparent bg-clip-text" : ""}>{data?.name && data.name.length >= 15 ? data.name.slice(0, 15).toUpperCase()+"..." : data?.name || "No Name Found"}</span>
</h3>

<a className="flex flex-col bg-white border shadow-sm roundedh-48 hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img className="w-62 h-60 md:object-scale-downrounded-t-xl " src={data?.image} alt="Image Description"/>
  <div className="p-4 md:p-5">
 
  <h3 className="text-lg text-gray-800 dark:text-white">
    <span className="font-bold">Heading:</span> {data?.heading}
  </h3>
 
  <p className="mt-1 text-gray-500 dark:text-gray-400">
    <span className="font-bold">Description:</span>  {data?.description.length >= 20 ? data.description.slice(0, 20)+"..." : data.description}

  </p>
 
</div>

</a>

</div>
  )
}
