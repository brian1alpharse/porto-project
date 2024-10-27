import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-700 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <a href="#" className="text-white text-xl font-bold">
          Alpharse
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
