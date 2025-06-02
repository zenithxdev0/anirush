import React, { useEffect, useState } from 'react'
import Container from '../util/Container'
import Footer from '../components/Footer'
import { SideBar } from '../components/SideBar'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../features/categorySlice'
import List from '../util/List'
import Loading from '../util/Loading'


const Category = () => {

  const navigate = useNavigate();

const gridLayout =
    "grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2";
    const { category } = useParams();

    const [cat, setCat] = useState(null);

    const dispatch = useDispatch();
      const [isOpen, setIsOpen] = useState(false);

      const { animes, genres, currentPage, totalPages, hasNextPage, error, loading } = useSelector((state) => state.category);

      useEffect(() => {
        if(category) {
            dispatch(fetchCategory({name: category, page: 1}));
        }
      }, [category])

      if(error) {
        navigate('/notfound');
      }
  
  return (
    <>
    
    <SideBar setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    <Container className={`min-h-screen`}>
        <NavBar openSidebar={() => setIsOpen(true)} />
        
        {loading ? <Loading />: <List gridLayout={gridLayout} label={category} data={animes}/>}
          
    </Container>
    <Footer />
    </>
  )
}

export default Category