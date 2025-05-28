import React, { useEffect } from "react";
import Container from "../util/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import List from "../util/List";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResult } from "../features/searchSlice";
import Loading from "../util/Loading";
import { useParams } from "react-router-dom";

const Search = () => {

  const dispatch = useDispatch();
  const gridLayout =
    "grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2";

  const { loading, error, animes, mostPopularAnimes } = useSelector(
    (state) => state.search
  );

  const { qp } = useParams();
  const page = new URLSearchParams(location.search).get("page") || 1; //default page
  

  console.log(qp);
  console.log(page);

  useEffect(() => {
    dispatch(fetchSearchResult({query: qp, page: page}));
  }, [qp, page])

  return (
    <>
      <Container>
        <NavBar />
        <List gridLayout={gridLayout} data={animes} label={`Search results for "${qp}"`} />
      </Container>
      <Footer />
    </>
  );
};

export default Search;
