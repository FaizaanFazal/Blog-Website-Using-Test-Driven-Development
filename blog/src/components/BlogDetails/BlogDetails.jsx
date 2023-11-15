import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '../../utils/images';
import '../../styles/Card.scss';
import { likeBlog } from '../../Redux/blogSlice';

export default function BlogDetails() {
  const [author, setAuthor] = useState();
  const [blogdetail, setBlogdetail] = useState({});
  const [slicedDate, setSlicedDate] = useState('');
  const [liked, setLiked] = useState(false);

  const location = useLocation();
  const blogs = useSelector((state) => state.blog.blogs);
  const users = useSelector((state) => state.user.allusers);
  const user = useSelector((state) => state.user.user);
  const dispatch=useDispatch();

  const handleicon=()=>{
    if(BlogDetails?.likes){
      const filteredlike = BlogDetails.likes.filter((like) => like.userId === user.id);
      console.log(filteredlike[0])
      if(filteredlike[0]){
        setLiked(true);
        console.log("setted")
      }
      else{
        setLiked(false)
        console.log("un-setted")
      }
    }
  }
  const handlelike=(e)=>{
    e.preventDefault();
    let ids={
      userId:user.id,
      blogId:blogdetail.id,
    }
    dispatch(likeBlog(ids)).then((result) => {
      if (result.payload) {
        toast.success('Done', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 });
      } else {
        console.log(result)
        toast.error(result.error.message, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
      }
      handleicon();
  })
}

  useEffect(() => {
    const slug = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const blog = blogs.filter((blog) => blog.slug === slug)[0];
    //date slicing
    if (blog) {
      const dateString = blog?.createdAt;
      setSlicedDate(dateString.substring(0, 10));
    } else {
      setSlicedDate('NA');
    }
    //set extracted blog details
    setBlogdetail(blog);
    //getting author by extracting authorid
    if (blog) {
      const { authorId } = blog;
      const filtered = users.filter((user) => user.id === authorId);
      setAuthor(filtered[0]);
    }
          
    if(blog?.likes){
      const filteredlike = blog.likes.filter((like) => like.userId === user.id);
      console.log(filteredlike[0])
      if(filteredlike[0]){
        setLiked(true);
        console.log("setted")
      }
      else{
        setLiked(false)
        console.log("un-setted")
      }
    }

  }, [location, blogs,dispatch]);

  return (
    <section data-testid="details" className="mb-5">
     <ToastContainer />
      <div className="container">
      <div className='likebtncont'>
        <h4 data-testid="titleHeading" className="title title-lg">{blogdetail?.title}</h4>
      { liked? <button type='button' className='iconlike' onClick={handlelike}>
       <img  src={`${images.heart_filled}`} alt='likebutton' /> 
       </button>
       :
       <button type='button' className='iconlike' onClick={handlelike}>
       <img  src={`${images.heart}`} alt='likebutton' /> 
       </button>}
      </div>
        
        <div className="card-footer  flex justify-between items-center">
          <div className="writer-info grid">
            <div className="info-avatar">
              <img src={author?.authorImageSrc} alt={author?.authorImageAlt} className="object-fit-cover" />
            </div>
            <div className="info-intro">
              <p className="intro-name text-base">{author?.userName}</p>
              {author?.verified
                ? (
                  <div className="intro-verify flex items-center">
                    <img src={`${images.verify_icon_filled}`} alt="icon" className="verify-icon" />
                    <span className="verify-status text-sm text">Verified writer</span>
                  </div>
                )
                : (
                  <div className="intro-verify flex items-center">
                    <img src={`${images.verify_icon_light}`} alt="icon" className="verify-icon" />
                    <span className="verify-status text-sm text">Not-Verified writer</span>
                  </div>
                )}
            </div>
          </div>
          
          <div className="date-info text text-base" data-testid="detailsdate">{slicedDate}</div>
        </div>

        <div className="cover-grid grid mt-3 mb-2 ">
          <div className="cover-grid-img">
            <img data-testid="Image" src={blogdetail?.imageSrc} alt={blogdetail?.imageAlt} className="object-fit-cover" />
          </div>
        </div>

        <div>

          <p data-testid="discription" className="text-lg text-black mt-3 px-1 discriptiontext mb-5 new-line">
            {blogdetail?.content}
          </p>
        </div>
      </div>
      <br />
    </section>
  );
}
