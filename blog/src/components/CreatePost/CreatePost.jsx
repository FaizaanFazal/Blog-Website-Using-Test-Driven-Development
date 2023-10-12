import React, { useState } from 'react';
import '../../styles/Card.scss';
import images from '../../utils/images';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    //todo
  }

  return (
    <section>
      <div className='container mb-5'>
        <h4 className='"title title-lg"'>Write a Post</h4>
        <form className='text-black'>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="title"
              placeholder="Title..."
              value={title}
              onChange={(e) => (setTitle(e.target.value))}
            />
          </div>

          {imgUrl.length >0 ? 
            <div className="customing">
            <img data-testid="Image" src={imgUrl} alt={title}className="object-fit-cover" />
          </div>
          :
            null
          }
                      

          <div class="form-group">
            <label for="img">Image Url</label>
            <input type="url" class="form-control" id="img"
              placeholder="Image Upload"
              value={imgUrl}
              onChange={(e) => (setImgUrl(e.target.value))}
            />
            <small className='text-danger'>* if image is not displayed after url insertion then check your url!! </small>
          </div>

          <div class="form-group">
            <label for="Content">Content</label>
            <input type="text-area" class="form-control" id="Content"
              placeholder="Content...."
              value={content}
              onChange={(e) => (setContent(e.target.value))}
            />
          </div>

          <div class="form-group">
            <label for="slug">Slug</label>
            <input type="text" class="form-control col-sm-6" id="slug"
              placeholder="Slug must be unique for post"
              value={slug}
              onChange={(e) => (setSlug(e.target.value))}
            />
          </div>

          <div className='text-center'>
            <button disabled="true" type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </div>
        </form>
      </div>

    </section>
  );
}
