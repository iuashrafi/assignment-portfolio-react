import React from "react";

const Header = () => {
  return (
    <nav className="w-full bg-slate-600 ">
      <div className="container mx-auto flex justify-between p-4 text-white">
        <span>@iuashrafi</span>
        <ul className="flex space-x-4">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
