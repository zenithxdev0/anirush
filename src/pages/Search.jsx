import React, { useEffect } from "react";
import Container from "../util/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import List from "../util/List";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResult } from "../features/searchSlice";
import Loading from "../util/Loading";
import { useParams } from "react-router-dom";
import crying from "../assets/crying.png";
import Trending from "../components/Trending";


const Search = () => {
  const dispatch = useDispatch();
  const gridLayout =
    "grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2";

  const { loading, error, animes, mostPopularAnimes } = useSelector(
    (state) => state.search
  );

  const { qp } = useParams();
  const page = new URLSearchParams(location.search).get("page") || 1; //default page

  console.log(qp);
  console.log(page);

  useEffect(() => {
    dispatch(fetchSearchResult({ query: qp, page: page }));
  }, [qp, page]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Container>
          <NavBar />
          {animes.length > 0 ? (
            <div className="flex gap-4 items-start">
              <List
              gridLayout={gridLayout}
              data={animes}
              label={`Search results for "${qp}"`}
            />
            <Trending className={`bg-zinc-800 p-4 rounded-lg block w-full max-w-80`} error={error} isLoading={loading} data={mostPopularAnimes} />
            </div>
          ) : (
            <>
              <div className="min-h-screen flex flex-col justify-center items-center font-medium">
                <img src={crying} alt="crying-anime" className="w-96" />
                <h1 className="text-center text-amber-300 text-3xl">
                  No result found for "{qp}"
                </h1>
              </div>
            </>
          )}
        </Container>
        <Footer />
      </>
    );
  }
};

export default Search;
