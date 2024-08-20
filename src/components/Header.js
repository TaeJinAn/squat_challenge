import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex">
        <NavLink
          to="/main"
          className="block mr-auto p-3 font-bold hover:text-red-500 cursor-pointer"
        >
          logo
        </NavLink>
        <ul className="flex">
          <li>
            <NavLink
              to="/main"
              className={({ isActive }) =>
                classNames(
                  "block mr-auto p-3 font-bold hover:text-red-500 cursor-pointer",
                  { "text-red-500": isActive }
                )
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                classNames(
                  "block mr-auto p-3 font-bold hover:text-red-500 cursor-pointer",
                  { "text-red-500": isActive }
                )
              }
            >
              history
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
