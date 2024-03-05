const Header = ({ head, description }) => {
    return (
      <div className="starter-template text-center mt-5">
        <h1 className="text-4xl font-bold">{head} Page</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Header;
  