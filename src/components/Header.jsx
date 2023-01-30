const Header = () => {
  return (
    <nav className="w-full bg-slate-600 absolute scroll:translate-y-4 ">
      <div className="container mx-auto flex justify-between p-4  text-white">
        <span>@iuashrafi</span>
        <ul className="flex space-x-8">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <ul className="flex space-x-8">
          <li>
            <i class="bi bi-linkedin"></i>
          </li>
          <li>
            <i class="bi bi-instagram"></i>
          </li>
          <li>
            <i class="bi bi-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
