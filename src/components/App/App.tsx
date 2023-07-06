import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Blog from '../../components/Blog';
import Post from '../../components/Post';
import Header from '../Header/Header';
import LanguageProvider from '../LanguageProvider/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/post/:key' element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
export default App;
