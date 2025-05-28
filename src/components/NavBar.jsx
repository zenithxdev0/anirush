import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../util/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchSuggestion } from '../features/searchSlice';
import { clearSuggestion } from '../features/searchSlice';
import Button from '../util/Button';

const NavBar = () => {

  const handleLogoClick = () => {
    navigate('/home');
  };

  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  }

  const { loading, error, animes} = useSelector((state) => state.suggestion);

  const [query, setQuery] = useState('');
  
  const handleNavigate = (anime) => {
    navigate(`/anime/${anime.id}`);
    dispatch(clearSuggestion()); // Clear home state when navigating to anime detail
    setQuery(''); // Clear the search query
  }

  const handleSearch = () => {
    navigate(`/search/${query}?page=1`);
    dispatch(clearSuggestion());
  }

  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 0) {
        dispatch(fetchSearchSuggestion(query));
      } else {
        dispatch(clearSuggestion());
      }
    }, 500); // 500ms debounce delay

    

    // Cleanup timeout on query change
    return () => clearTimeout(delayDebounce);

  }, [query, dispatch]);

  return (
    <nav className=' text-white w-full py-4 z-50'>
        <div className='flex sm:items-center  sm:justify-between gap-4 sm:flex-row flex-col'>
            <div className='w-full flex items-center justify-between'>
              <Logo onClick={handleLogoClick} />
              <p onClick={handleShowSearch} className='sm:hidden block'>search</p>
            </div>

            <div className={`relative w-full sm:w-auto sm:block ${(showSearch ? 'block' : 'hidden')}` }>
              
              <div className='flex gap-2'>
                <input onChange={(e) => setQuery(e.target.value)} placeholder='Search Anime' type="text" className='bg-white/30 rounded-md ps-4 py-2 w-full sm:min-w-96'/>
                <Button onClick={handleSearch} color={'amber'}>Search</Button>
              </div>
              
              {animes && (
                <div className='absolute top-full left-0 bg-neutral-900/60 backdrop-blur-md rounded-md mt-2 w-full max-h-60 overflow-y-auto z-[100] custom-scrollbar'>
                  {loading && <p className='text-white'>Loading...</p>}
                  {error && <p className='text-red-500'>{error}</p>}
                  <ul className='p-2'>
                    {animes.length > 0 && animes.map((anime) => (
                      <li key={anime.id} className='py-2 px-4 hover:bg-white/20 cursor-pointer flex items-center gap-2' onClick={() => handleNavigate(anime)}>
                        <img src={anime.poster} alt={anime.name} className='w-12' />
                        <p>{anime.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        </div>
    </nav>
  )
}

export default NavBar