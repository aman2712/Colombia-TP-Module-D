import { Link } from "react-router-dom";

const Header = ({ backLink }) => {
  return (
    <div className="flex justify-between items-center w-screen px-[10%] mt-10">
      <Link to={backLink}>
        <img src="/images/ico-prev.svg" alt="Back Icon | Paris Olympics 2024" />
      </Link>
      <img
        src="/images/logo-sm-white.png"
        alt="Logo Small | Paris Olympics 2024"
        className="pr-[30%]"
      />
    </div>
  );
};

export default Header;
