import React, { useState } from 'react';
import '../../styles/Card.scss';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    // todo
  };

  return (
    <section data-testid="createpost">
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
              className="btn btn-primary"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
