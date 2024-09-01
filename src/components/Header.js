import { AppBar, Toolbar } from "@mui/material";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <AppBar position="static" className="flex" color="primary">
        <Toolbar className="flex justify-between">
          <NavLink
            to="/main"
            className="block p-3 font-bold hover:text-red-500 cursor-pointer"
          >
            <img src="/logo.jpg" alt="logo" className="h-10 w-auto rounded-xl" />
          </NavLink>

          <div className="font-bold text-2xl">Squat Challenge</div>

          <ul className="block">
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
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
