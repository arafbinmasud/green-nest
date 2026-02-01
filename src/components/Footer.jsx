import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-secondary text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">
             <FaInstagram size={24} />
            </a>
            <a className="link link-hover">
             <FaFacebook size={24} ></FaFacebook> 
            </a>
            <a className="link link-hover">
             <FaPinterest size={24} />
            </a>
            
          </div>
        </nav>
        <aside>
          <p>
            © 2025 GreenNest. All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
