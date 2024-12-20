import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Discover from './components/Discover'
import Genres from './components/Genres'
import Movie from './components/Movie'
import Search from './components/Search'

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Discover />}></Route>
              <Route path='/discover/:discoverName' element={<Discover />}></Route>
              <Route path='/genres/:genresName' element={<Genres />}></Route>
              <Route path='/movie/:movieId' element={<Movie />}></Route>
              <Route path='/search/:keywords' element={<Search />}></Route>
              <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
