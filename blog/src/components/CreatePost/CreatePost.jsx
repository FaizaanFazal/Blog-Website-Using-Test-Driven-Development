// eslint-disable jsx-a11y/label-has-associated-control
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isProperImageURL } from '../../utils/helperfunctions';
import { createBlogs } from '../../Redux/blogSlice';

export default function CreatePost() {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgAlt, setImgAlt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [imgdisplay, setImgdisplay] = useState({ src: '', status: false });
  const [errorTitle, setErrorTitle] = useState('');
  const [errorImgurl, setErrorImgurl] = useState('');
  const [errorImgalt, setErrorImgalt] = useState('');
  const [errorContent, setErrorContent] = useState('');
  const [errorSlug, setErrorSlug] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleValidation = (e) => {
    setTitle(e.target.value);
    const { value } = e.target;
    if (value.length < 8) { setErrorTitle('* Required at least 8 characters.'); } else { setErrorTitle(null); }
  };
  // const fetchImage = async () => {
  //   try {
  //     const response = await fetch(imgUrl,{
  //       headers: {
  //         Accept: "image/*",
  //       },
  //     });
  //     console.log(response.headers.get("Content-Type"))
  //     console.log(response.status )
  //     if (response.headers.get("Content-Type").startsWith("image/jpeg")) {
  //       setImgdisplay(true)
  //     } else {
  //       setImgdisplay(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setImgdisplay(false)
  //   }
  // };

  const imgurlValidation = (e) => {
    const { value } = e.target;
    const check = isProperImageURL(value);
    setImgUrl(value);
    if (value.length < 8) { setErrorImgurl('* Required at least 8 characters.'); }
    if (check === false) { setErrorImgurl('* Incorrect URL format example:(https://google.com)'); } else { setErrorImgurl(null); }
    if (check === true) { setImgdisplay({ src: value, status: true }); } else { setImgdisplay({ src: '', status: false }); }
  };

  const imgaltValidation = (e) => {
    const { value } = e.target;
    setImgAlt(value);
    if (value.length < 8) { setErrorImgalt('* Required at least 8 characters.'); }
  };

  const contentValidation = (e) => {
    setContent(e.target.value);
    const { value } = e.target;
    if (value.length < 100) { setErrorContent('* Required at least 100 characters.'); } else { setErrorContent(null); }
  };

  const slugValidation = (e) => {
    setSlug(e.target.value);
    const { value } = e.target;
    if (value.length < 5) { setErrorSlug('* Required at least 5 characters.'); } else { setErrorSlug(null); }
  };

  const validateAll = () => {
    if (!title || title.length < 8) {
      toast.error('title incorrect: min length 8', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    const c = isProperImageURL(imgUrl);
    if (!imgUrl || imgUrl.length < 8 || c === false) {
      toast.error('Image Url incorrect', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    if (!content || content.length < 100) {
      toast.error('content incorrect: min length 100', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    if (!slug || slug.length < 5) {
      toast.error('slug incorrect: min length 5', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    return true;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const all = validateAll();
    if (all === false) {
      return false;
    }
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user);
    const blog = {
      authorId: user.id,
      title,
      imageSrc: imgUrl,
      imageAlt: imgAlt,
      content,
      slug,
    };
    dispatch(createBlogs(blog)).then((result) => {
      if (result.payload) {
        toast.success('Blog added succesfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
        setTitle('');
        setImgUrl('');
        setImgAlt('');
        setContent('');
        setSlug('');
      } else {
        toast.error(result.error.message, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
      }
    });
    return true;
  };

  const areFieldfilled = () => {
    if (!title || !imgUrl || !content || !slug) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const userr = localStorage.getItem('user');
    if (userr === null) {
      console.log(userr);
      navigate('/login');
    }
  }, [user]);

  return (
    <section data-testid="createpost">
      <ToastContainer />
      <div className="container mb-5">
        <h4 className='"title title-lg"'>Write a Post</h4>
        <form className="text-black">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              data-testid="inputtitle"
              className="form-control"
              placeholder="Title..."
              value={title}
              onChange={titleValidation}
            />
            {errorTitle && <small data-testid="errorTitle" style={{ color: 'red' }}>{errorTitle}</small>}
          </div>

          {imgdisplay.status === true
            && (
              <div className="customing" data-testid="ImageCont">
                <img
                  data-testid="Image"
                  src={imgdisplay.src || null}
                  alt={title}
                  className="object-fit-cover"
                  onError={({ currentTarget }) => {
                    // eslint-disable-next-line no-param-reassign
                    currentTarget.onerror = null; // prevents looping
                    // eslint-disable-next-line no-param-reassign
                    currentTarget.src = 'https://media.istockphoto.com/id/1456566772/photo/page-not-found-404-design-404-error-web-page-concept-on-a-computer-screen-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=5gcQ1JbTHMqwEpw13pzVxpR8ajQ1gsrxuLOmd4CMtro=';
                  }}
                />
              </div>
            )}

          <div className="form-group">
            <label>Image Url</label>
            <input
              type="url"
              data-testid="imgInput"
              className="form-control"
              placeholder="Image Upload"
              value={imgUrl}
              onChange={imgurlValidation}
            />
            {errorImgurl && (
              <small data-testid="errorImg" style={{ color: 'red' }}>
                {errorImgurl}
                {' '}
                <br />
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Image Alt</label>
            <input
              type="text"
              data-testid="imgaltinput"
              className="form-control"
              placeholder="Image Alt"
              value={imgAlt}
              onChange={imgaltValidation}
            />
            {errorImgurl && (
              <small data-testid="errorImgalt" style={{ color: 'red' }}>
                {errorImgalt}
                {' '}
                <br />
              </small>
            )}
            <small className="text-warning">*Note if image is not displayed after url insertion then check your url!! </small>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea
              rows={3}
              data-testid="inputcontent"
              className="form-control"
              placeholder="Content...."
              value={content}
              onChange={contentValidation}
            />
            {errorContent && <small data-testid="errorContent" style={{ color: 'red' }}>{errorContent}</small>}
          </div>

          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              data-testid="inputslug"
              className="form-control col-sm-6"
              placeholder="Slug must be unique for post"
              value={slug}
              onChange={slugValidation}
            />
            {errorSlug && <small data-testid="errorSlug" style={{ color: 'red' }}>{errorSlug}</small>}
          </div>

          <div className="text-center">
            <button
              data-testid="submitbtn"
              type="submit"
              className="btn btn-primary rounded-pill"
              onClick={handlesubmit}
              disabled={!areFieldfilled()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
