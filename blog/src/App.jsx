import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom"
import Main from "./pages/Main";
import Blogs from "./pages/Blogs"
import Createpost from "./pages/Createpost"


function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  path='/' element={<Main/>} />
          <Route  path='/blogs:id' element={<Blogs/>} />
          <Route  path='/createpost' element={<Createpost/>} />           
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
