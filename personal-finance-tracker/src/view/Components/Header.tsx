import Navigation from "./header/Navigation";

const Header = () => {
  return (
    <header>
      <Navigation />
        <img src="/public/ICON.svg" alt="icon Finance" 
        className="block w-20 h-20 m-4" />
      <h1 className="text-4xl font-bold">
        Personal Finance Tracker
        <img
          src="/public/hatsune-miku-dance.gif"
          alt="Miku dancing"
          className="inline-block w-20 h-20 m-4"
        />
      </h1>
    </header>
  );
};

export default Header;
