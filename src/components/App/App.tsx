import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Blog from '../../components/Blog';
import Post from '../../components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/post/:key' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
