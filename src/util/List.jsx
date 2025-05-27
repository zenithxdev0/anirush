import React from 'react'

const List = ({label, data, onClick, gridLayout}) => {
  return (
<div className='mb-8'>
  <h1 className='text-white text-4xl font-bold mb-6'>{label}</h1>
  <div className={gridLayout}>
    {data.length > 0 && data.map((anime, idx) => (
      <a href={`/anime/${anime.id}`} key={anime.id || idx} className="z-50" onClick={() => onClick(anime.id)}>
        <div className="w-auto h-56 mb-3" >
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

//grid md:grid-cols-6 grid-cols-4 gap-2