import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound' // Optional 404 page
import './App.css'
import Details from './pages/Details'
import Watch from './pages/Watch'
import Landing from './pages/Landing'
import Sorted from './pages/Sorted'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/anime/:animeId' element={<Details />}/>
        <Route path='/watch/:episodeId' element={<Watch />}/>
        <Route path='/anime-list/:character' element={<Sorted />} />
        <Route path= '/search/:qp' element={<Search />} />


        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  )
}

export default App
