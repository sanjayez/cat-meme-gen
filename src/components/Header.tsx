import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="pt-8 md:pt-12 text-white">
      <h1 className="text-5xl font-bold text-center">{title}</h1>
    </header>
  );
};

export default Header; 