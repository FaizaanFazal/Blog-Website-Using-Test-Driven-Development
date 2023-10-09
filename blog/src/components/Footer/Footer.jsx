import React from 'react';
import FooterLink from './FooterLink';
import { linksData } from '../../data/blog-posts';

export default function Footer() {
  return (
    <footer title="footer" data-testid="footer" className="footer bg-blue-dark">
      <div className="container">
        <div className="ftr-list">
          <div className="ftr-item">
            <a href="/" className="ftr-brand text-white">
              Blogs
              {' '}
              <span className="ftr-brand-dot bg-white" />
            </a>

            <p className="text text-base">
              Build a modern and creative website with crealand
            </p>
            <ul className="social-links text-white flex flex-wrap text-gray text-base">
              <li><a data-testid="social" href="https://github.com/jsx-eslint">Twitter</a></li>
              <li><a data-testid="social" href="https://github.com/jsx-eslint">Linkedin</a></li>
              <li><a data-testid="social" href="https://github.com/jsx-eslint">Instagram</a></li>
              <li><a data-testid="social" href="https://github.com/jsx-eslint">Google</a></li>
              <li><a data-testid="social" href="https://github.com/jsx-eslint">YouTube</a></li>
            </ul>
          </div>
          {
            linksData.map((col) => (
              <FooterLink key={col.id} linkData={col} />
            ))
          }
        </div>
        <div data-testid="copyright" className="ftr-text text-center text-gray text-base">Copyright &copy; 2023. Crafted with love.</div>
      </div>
    </footer>
  );
}
