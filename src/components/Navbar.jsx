const Navbar = () => {
  return (
    <div className="menu-container d-flex justify-content-between bg-dark text-light w-100">
      <div>
        <h3 className="fs-3 p-1">Platillos</h3>
      </div>
      <div>
        <h3 className="fs-3 p-1">Bebidas</h3>
      </div>
      <div>
        <h3 className="fs-3 p-1">Postres</h3>
      </div>
    </div>
  );
};
export default Navbar;
