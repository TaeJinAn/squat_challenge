function Header() {
  return (
    <>
      <header className="flex">
        <span className="mr-auto p-3 font-bold">logo</span>
        <ul className="flex">
          <li>
            <span className="block p-3 font-bold hover:cursor-pointer hover:text-red-500">
              home
            </span>
          </li>
          <li>
            <span className="block p-3 font-bold hover:cursor-pointer hover:text-red-500">
              history
            </span>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
