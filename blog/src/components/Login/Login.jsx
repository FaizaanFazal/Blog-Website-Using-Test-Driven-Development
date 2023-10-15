import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section data-testid="loginForm">
      <div className="container">
        <div className="BoxAuth bg-white">
          <div className="heading">
            <h4 className="title title-box text-center">Login</h4>
          </div>

          <form className="text-darkblue p-3">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                data-testid="emailid"
                className="form-control"
                placeholder="Title..."
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                data-testid="pass"
                className="form-control"
                placeholder="Password..."

              />
            </div>

            <div className="text-center">
              <button
                data-testid="loginbtn"
                type="submit"
                className="btn btn-primary rounded-pill"
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
