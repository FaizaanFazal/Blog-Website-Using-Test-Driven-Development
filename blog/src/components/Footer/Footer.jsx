import React from 'react';
import FooterLink from './FooterLink';
import { linksData } from '../../data/blog-posts';

export default function Footer() {
  return (
    <footer title="footer" data-testid="footer" className="footer bg-blue-dark">
      <div className="container">
        <div className="ftr-list">
          <div className="ftr-item">
            <a href="#" className="ftr-brand text-white">
              Blogs
              {' '}
              <span className="ftr-brand-dot bg-white" />
            </a>

            <p className="text text-base">
              Build a modern and creative website with crealand
            </p>
            <ul className="social-links text-white flex flex-wrap text-gray text-base">
              <li><a data-testid="social" href="/">Twitter</a></li>
              <li><a data-testid="social" href="/">Linkedin</a></li>
              <li><a data-testid="social" href="/">Instagram</a></li>
              <li><a data-testid="social" href="/">Google</a></li>
              <li><a data-testid="social" href="/">YouTube</a></li>
            </ul>
          </div>

          <FooterLink props={linksData} />

        </div>
        <div data-testid="copyright" className="ftr-text text-center text-gray text-base">Copyright &copy; 2023. Crafted with love.</div>
      </div>
    </footer>
  );
}
