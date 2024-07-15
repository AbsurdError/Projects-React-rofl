import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageOne, PageTwo } from './BuildPage';
import Header from './Header';


function App(){
  const location = useLocation();
  console.log(location.pathname)
  return(
    <div className='App'>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<div>Lorem ipsum dolor sit amet.</div>}/>
            <Route path='*' element={<div>Page not fount</div>}/>
            <Route path='one' element={<PageOne/>}/>
            <Route path='two' element={<PageTwo/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App;
