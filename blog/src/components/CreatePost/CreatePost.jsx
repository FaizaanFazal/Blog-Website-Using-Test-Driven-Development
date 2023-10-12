// eslint-disable jsx-a11y/label-has-associated-control
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/Card.scss';
import 'react-toastify/dist/ReactToastify.css';
import { isProperImageURL } from '../../utils/helperfunctions';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

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
      toast.error('slug incorrect: min length 8', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    return true;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const all = validateAll();
    if (all === false) {
      return false;
    }
    alert('validations working fine');
    return true;
  };
  const areFieldfilled = () => {
    if (!title || !imgUrl || !content || !slug) {
      return false;
    }
    return true;
  };

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
              onChange={(e) => (setTitle(e.target.value))}

            />
          </div>

          {imgUrl.length > 0
            ? (
              <div className="customing">
                <img data-testid="Image" src={imgUrl} alt={title} className="object-fit-cover" />
              </div>
            )
            : null}

          <div className="form-group">
            <label htmlFor="img">Image Url</label>
            <input
              type="url"
              data-testid="imgInput"
              className="form-control"
              id="img"
              placeholder="Image Upload"
              value={imgUrl}
              onChange={(e) => (setImgUrl(e.target.value))}

            />
            <small className="text-danger">* if image is not displayed after url insertion then check your url!! </small>
          </div>

          <div className="form-group">
            <label htmlFor="Content">Content</label>
            <textarea
              rows={3}
              data-testid="inputcontent"
              className="form-control"
              id="Content"
              placeholder="Content...."
              value={content}
              onChange={(e) => (setContent(e.target.value))}

            />
          </div>

          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              data-testid="inputslug"
              className="form-control col-sm-6"
              id="slug"
              placeholder="Slug must be unique for post"
              value={slug}
              onChange={(e) => (setSlug(e.target.value))}
            />
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
