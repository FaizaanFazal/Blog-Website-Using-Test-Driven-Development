import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Blogs from './pages/Blogs';
import Createpost from './pages/Createpost';
import Header from './components/Header/Header';
import Blogdetails from './pages/Blogdetails';
import Footer from './components/Footer/Footer';
import CreatePost from './components/CreatePost/CreatePost';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="/blogdetails/:slug" element={<Blogdetails />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
