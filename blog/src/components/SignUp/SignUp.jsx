import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/Card.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  isProperImageURL, isProperPass, isProperEmail, isProperName,
} from '../../utils/helperfunctions';
import { signupUser } from '../../Redux/userSlice';

export default function SignUp() {
  const [authorimage, setAuthorimage] = useState('');
  const [authorAlt, setAuthorAlt] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [imgdisplay, setImgdisplay] = useState({ src: '', status: false });
  const [errorName, setErrorName] = useState('');
  const [errorImage, setErrorImage] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgValidation = (e) => {
    const { value } = e.target;
    const check = isProperImageURL(value);
    setAuthorimage(value);
    if (value.length < 8) { setErrorImage('* Required at least 8 characters.'); }
    if (check === false) { setErrorImage('* Incorrect URL format example:(https://google.com)'); } else { setErrorImage(null); }
    if (check === true) { setImgdisplay({ src: value, status: true }); } else { setImgdisplay({ src: '', status: false }); }
  };

  const nameValidation = (e) => {
    setUsername(e.target.value);
    const { value } = e.target;
    const check = isProperName(value);
    if (username.length <= 0 || check === false) { setErrorName('* Name incorrect.'); } else { setErrorName(null); }
  };

  const emailValidation = (e) => {
    setEmail(e.target.value);
    const { value } = e.target;
    const check = isProperEmail(value);
    if (check === false) { setErrorEmail('* Email Format incorrect.'); } else { setErrorEmail(null); }
  };

  const passValidation = (e) => {
    setPass(e.target.value);
    const { value } = e.target;
    const check = isProperPass(value);
    if (check === false) { setErrorPass('* Required min 8 characters.*One Special char,*On Capital letter.*One digit'); } else { setErrorPass(null); }
  };

  const validateAll = () => {
    const c = isProperImageURL(authorimage);
    if (!authorimage || authorimage.length < 8 || c === false) {
      toast.error('Image Url incorrect', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }

    if (username.length < 1 || !isProperName(username)) {
      toast.error('Email incorrect', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }

    if (email.length < 8 || !isProperEmail(email)) {
      toast.error('Email incorrect', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }

    if (!isProperPass(pass)) {
      toast.error('Password Incorrect', { position: toast.POSITION.TOP_RIGHT, duration: 5000 });
      return false;
    }
    return true;
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    const checkall = validateAll();
    if (checkall === false) {
      return false;
    }
    const userCredentials = {
      email,
      password: pass,
      userName: username,
      authorImageSrc: authorimage,
      authorImageAlt: username,
    };
    dispatch(signupUser(userCredentials)).then((result) => {
      if (result.payload) {
        toast.success("Registered succesfully",
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true,
          });
        navigate('/');
      }
      else {
        toast.error(result.error.message,
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true,
          });
      }
    });
    return true;
  };

  const areFieldfilled = () => {
    if (!email || !pass) {
      return false;
    }
    return true;
  };

  return (
    <section data-testid="SignupForm">
      <ToastContainer />
      <div className="container">
        <div className="box-auth bg-white">
          <div className="heading">
            <h4 className="title title-box text-center">Sign Up</h4>
          </div>

          {imgdisplay.status === true
            && (
              <div className="p-3" data-testid="imgAuthor">
                <img
                  data-testid="Image"
                  src={imgdisplay.src || null}
                  alt="Author dp"
                  className="object-fit-cover smallimg"
                  onError={({ currentTarget }) => {
                    // eslint-disable-next-line no-param-reassign
                    currentTarget.onerror = null; // prevents looping
                    // eslint-disable-next-line no-param-reassign
                    currentTarget.src = 'https://media.istockphoto.com/id/1456566772/photo/page-not-found-404-design-404-error-web-page-concept-on-a-computer-screen-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=5gcQ1JbTHMqwEpw13pzVxpR8ajQ1gsrxuLOmd4CMtro=';
                  }}
                />
              </div>
            )}

          <form className="text-darkblue p-3">
            <div className="form-group">
              <label>Image Url</label>
              <input
                type="text"
                value={authorimage}
                data-testid="inputImageurl"
                className="form-control"
                placeholder="Image URl..."
                onChange={imgValidation}
              />
              {errorImage && <small data-testid="errorImage" style={{ color: 'red' }}>{errorImage}</small>}
            </div>
            <div className="form-group">
              <label>Image Alt</label>
              <input
                type="text"
                value={authorAlt}
                data-testid="inputImageAlt"
                className="form-control"
                placeholder="Image Alternative..."
                onChange={(e) => setAuthorAlt(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={username}
                data-testid="inputName"
                className="form-control"
                placeholder="Name..."
                onChange={nameValidation}
              />
              {errorName && <small data-testid="errorName" style={{ color: 'red' }}>{errorName}</small>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                data-testid="inputEmail"
                className="form-control"
                placeholder="Email..."
                onChange={emailValidation}
              />
              {errorEmail && <small data-testid="errorEmail" style={{ color: 'red' }}>{errorEmail}</small>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={pass}
                data-testid="inputPass"
                className="form-control"
                placeholder="Password..."
                onChange={passValidation}
              />
              {errorPass && <small data-testid="errorPass" style={{ color: 'red' }}>{errorPass}</small>}
            </div>

            <div className="text-center">
              <button
                data-testid="signupBtn"
                type="submit"
                className="btn btn-primary rounded-pill"
                onClick={handleSingUp}
                disabled={!areFieldfilled()}
              >
                SignUp
              </button>
            </div>
            <div className="d-flex justify-content-end">
              <small><Link to="/signup">Login!</Link></small>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
