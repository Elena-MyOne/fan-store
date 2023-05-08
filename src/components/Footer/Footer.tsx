import React from 'react';

const Footer = () => {
  return (
    <footer className="h-[60px] bg-gray-100 flex justify-center items-center mx-3">
      <div>
        &copy; Developed by{' '}
        <a
          href="https://github.com/Elena-MyOne"
          target="_blank"
          rel="noreferrer"
          className="pointer text-orange-500 hover:text-orange-600 duration-300"
        >
          Elena-myone
        </a>
      </div>
    </footer>
  );
};

export default Footer;
