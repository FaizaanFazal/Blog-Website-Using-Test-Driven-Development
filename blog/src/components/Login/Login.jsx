import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isProperEmail, isProperPass } from '../../utils/helperfunctions';
import { loginUser } from '../../Redux/userSlice';

export default function Login() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customId = 'custom-id-yes';

  // const { loading, error } = useSelector((state) => state.user);

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

  // asdasd

  const handlelogin = (e) => {
    e.preventDefault();
    const checkall = validateAll();
    if (checkall === false) {
      alert('checks failed');
    }
    const userCredentials = {
      email, password: pass,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail('');
        setPass('');
        navigate('/');
      } else {
        toast.error(result.error.message,
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            toastId: customId,
            closeOnClick: true,
          });
      }
    });
  };

  const areFieldfilled = () => {
    if (!email || !pass) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const userr = localStorage.getItem('user');
    if (userr !== null) {
      console.log(userr);
      navigate('/');
      // dispatch(getUserFromLocalStorage());
    }
  }, [user]);

  return (
    <section data-testid="loginForm">
      <div className="container">
        <div className="box-auth bg-white">
          <div className="heading">
            <h4 className="title title-box text-center">Login</h4>
          </div>

          <form className="text-darkblue p-3">
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
                data-testid="loginbtn"
                type="submit"
                className="btn btn-primary rounded-pill"
                onClick={handlelogin}
                disabled={!areFieldfilled()}
              >
                Login
                {/* {loading ? 'loading...'
                  : 'Login'} */}
              </button>
            </div>
            {/* <small style={{ color: 'red' }}>{error}</small> */}
            <div className="d-flex justify-content-between">
              <small><Link to="/forgetpass">Forget password?</Link></small>
              <small><Link to="/signup">create an account!</Link></small>
            </div>

          </form>
        </div>

      </div>
    </section>

  );
}
