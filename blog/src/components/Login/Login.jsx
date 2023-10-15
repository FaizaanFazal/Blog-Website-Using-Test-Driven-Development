import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { isProperEmail, isProperPass } from '../../utils/helperfunctions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

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

  const handlelogin = (e) => {
    e.preventDefault();
    const checkall = validateAll();
    if (checkall === false) {
      return false;
    }
    alert('validations working fine');
    return true;
  };

  const areFieldfilled = () => {
    if (!email || !pass) {
      return false;
    }
    return true;
  };

  return (
    <section data-testid="loginForm">
      <ToastContainer />
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
                data-testid="inputEmail"
                className="form-control"
                placeholder="Title..."
                onChange={emailValidation}
              />
              {errorEmail && <small data-testid="errorEmail" style={{ color: 'red' }}>{errorEmail}</small>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
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
              </button>
            </div>
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
