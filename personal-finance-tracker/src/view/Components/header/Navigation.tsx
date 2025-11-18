const Navigation = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex items-center gap-4 text-amber-100">
        <li>
          <a href="#!">
            <img className="w-6 h-6"
             src="/public/twitter.svg" 
             alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#!">
            <img
              className="w-6 h-6"
              src="/public/Facebook.svg"
              alt="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <img className="w-6 h-6" 
            src="/public/Instagram.svg"
             alt="mail" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
