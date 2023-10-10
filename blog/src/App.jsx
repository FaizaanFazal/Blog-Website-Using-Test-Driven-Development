import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Blogs from './pages/Blogs';
import Createpost from './pages/Createpost';
import Header from './components/Header/Header';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="/blogdetails/:slug" element={<BlogDetails />} />
          <Route path="/createpost" element={<Createpost />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
