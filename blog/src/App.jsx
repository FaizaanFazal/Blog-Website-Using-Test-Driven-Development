import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getUser} from './Redux/userSlice'
import Main from './pages/Main';
import Blogs from './pages/Blogs';
import Header from './components/Header/Header';
import Blogdetails from './pages/Blogdetails';
import Footer from './components/Footer/Footer';
import CreatePost from './components/CreatePost/CreatePost';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { useEffect } from 'react';

function App() {
  // const ProtectedRoute = ({ children }) => {
  //   const user = useSelector((state) => state.user.user);
  //   if (user.userName && user.userName.length > 0) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="/blogdetails/:slug" element={<Blogdetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
