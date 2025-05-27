import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Container from '../util/Container'
import { useParams } from 'react-router-dom'
import { fetchAzList } from '../features/sortSlice'
import { useEffect } from 'react'
import List from '../util/List'
import Pagination from '../util/Pagination'
  import Loading from '../util/Loading'

const Sorted = () => {
  const gridLayout =
    "grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2";
  const dispatch = useDispatch();
  const { character } = useParams();
  const splittedURL = character.split('?');
  const char = splittedURL[0];
  const page = new URLSearchParams(location.search).get('page') || 1; //default page 1


  const { loading, error, animes, sortOption, totalPages, currentPage, hasNextPage } = useSelector((state) => state.aZList);

  console.log(char);
  console.log(page);

  useEffect(() => {
    dispatch(fetchAzList({option: char, page: page}))
  }, [char, page]);

 

  
  return (
    <>
    <Container className={"min-h-screen"}>
        <NavBar />
        {(loading && <Loading />)  || <List data={animes} gridLayout={gridLayout} />}
        <Pagination totalPage={totalPages} currentPage={page} />
    </Container>
    <Footer />
    </>
  )
}

export default Sorted