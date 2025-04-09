import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        <p className="text-center text-muted">Copyright &copy; {new Date().getFullYear()} Designed by Nicholas Kiplimo. </p>
      </footer>
    </div>
  );
};

export default Footer;
