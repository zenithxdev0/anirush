import React from 'react'

const List = ({label, data, onClick}) => {
  return (
<div className='mb-8'>
  <h1 className='text-white text-4xl font-bold mb-6'>{label}</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
    {data.length > 0 && data.map((anime, idx) => (
      <a href={`/anime/${anime.id}`} key={anime.id || idx} className="" onClick={() => onClick(anime.id)}>
        <div className="w-44 h-64 mb-3" >
          <img 
            src={anime.poster} 
            alt={anime.name} 
            className="w-full h-full object-fill rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300" 
          />
        </div>
        <h3 className="text-white text-sm font-semibold line-clamp-1">
          {anime.name}
        </h3>
      </a>
    ))}
  </div>
</div>
  )
}

export default List