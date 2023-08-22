import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="h-[80px] bg-gray-900  text-white flex justify-center items-center px-3">
      <div>
        &copy; Developed by{' '}
        <a
          href="https://github.com/Elena-MyOne"
          target="_blank"
          rel="noreferrer"
          className="pointer text-orange-400 hover:text-orange-600 duration-300"
        >
          Elena-myone
        </a>
      </div>
    </footer>
  );
};

export default Footer;
