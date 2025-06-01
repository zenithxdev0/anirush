import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchSuggestion } from "../features/searchSlice";
import { clearSuggestion } from "../features/searchSlice";
import { useNavigate, useParams } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon";

const Search = ({ className }) => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const dispatch = useDispatch();

  const { loading, error, animes } = useSelector((state) => state.suggestion);

  const handleNavigate = (anime) => {
    navigate(`/anime/${anime.id}`);
    dispatch(clearSuggestion()); // Clear home state when navigating to anime detail
    setQuery(""); // Clear the search query
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}?page=1`);
    dispatch(clearSuggestion());
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 0) {
        dispatch(fetchSearchSuggestion(query));
      } else if (loading) {
        dispatch(clearSuggestion());
      } else {
        dispatch(clearSuggestion());
      }
    }, 500); // 500ms debounce delay

    // Cleanup timeout on query change
    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  return (
    <>
      <form onSubmit={handleSearch} className="flex gap-2 relative">
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Anime"
            type="text"
            className="bg-white/30 rounded-md ps-4 py-2 w-full sm:min-w-96"
            required
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
            type="submit"
          >
            <SearchIcon size={18} />
          </button>

                    {animes && (
            <div className="absolute top-full left-0 bg-neutral-800/60 backdrop-blur-md rounded-md mt-2 w-full max-h-60 overflow-y-auto z-[100] custom-scrollbar">
              {loading && (
                <div className="flex items-center justify-center">
                  <div className="loader"></div>
                </div>
              )}
              {error && <p className="text-red-500">{error}</p>}
              {animes.length > 0 && (
                <ul className="p-2">
                  {animes.map((anime) => (
                    <li
                      key={anime.id}
                      className="py-2 px-4 hover:bg-white/20 cursor-pointer flex items-center gap-1"
                      onClick={() => handleNavigate(anime)}
                    >
                      <img src={anime.poster} alt={anime.name} className="w-12 h-16" />
                      <p className="text-white">{anime.name}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;
